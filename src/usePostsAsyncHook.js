import React from "react";

async function fetchPostIds() {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const postIds = await response.json()
  return postIds
}

async function fetchPost(id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  const post = await response.json()
  return post
}


export default function usePostsAsyncHook(page) {
  const [postIds, setPostIds] = React.useState([])
  const [posts, setPosts] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [pagesFetched, setPagesFetched] = React.useState([])

  React.useEffect(() => {
    async function fetchNewPosts() {
      try {
        setLoading(true)
        setPagesFetched(pagesFetched.concat(page))
        const postIdsFetched = await fetchPostIds()
        setPostIds(postIdsFetched)
        const postIdsOnPage = postIds.slice(page * 10, (page + 1) * 10)
        const newPosts = await Promise.all(postIdsOnPage.map(async id => fetchPost(id)))
        
        console.log(postIdsOnPage, newPosts)
        
        setPosts(posts.concat(newPosts))
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if(!pagesFetched.includes(page)) {
      fetchNewPosts()
    }

  }, [page, pagesFetched, postIds, posts])

  return [posts, isLoading, error];
}

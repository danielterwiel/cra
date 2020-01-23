import React from "react";

async function fetchPost(id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  const post = await response.json()
  console.log(post)
  return post
}

export default function usePostsAsyncHook(page) {
  const [posts, setPosts] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [pagesFetched, setPagesFetched] = React.useState([])

  React.useEffect(() => {
    async function fetchPostIds() {
      try {
        setLoading(true)
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        const postIds = await response.json()
        const postIdsOnPage = postIds.slice(page, page + 10)
        const posts = await Promise.all(
          postIdsOnPage.map(async id => fetchPost(id))
        )
        setPosts(posts)
        setPagesFetched(pagesFetched.concat(page))
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if(!pagesFetched.includes(page)) {
      fetchPostIds()
    }

  }, [page, pagesFetched, posts])

  return [posts, isLoading, error];
}

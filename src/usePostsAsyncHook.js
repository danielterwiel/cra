import React from "react";

export default function usePostsAsyncHook(page) {
  const [posts, setPosts] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  
  React.useEffect(() => {
    async function fetchPostIds() {
      try {
        setLoading(true)
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        const postsIds = await response.json()
        console.log(postsIds)
        setPosts(posts)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPostIds()

  }, [posts])

  return [posts, isLoading, error];
}

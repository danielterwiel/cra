import React from "react";
import usePostsAsyncHook from "./usePostsAsyncHook.js";

export default function() {
  const [page, setPage] = React.useState(0);
  const [posts, loading, error] = usePostsAsyncHook(page);

  return (
    <>
      <h1>Hacker News page - first {(page + 1) * 10} posts</h1>
      {error && <div>ERROR</div>}
      <div>
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
      <div>
        <button disabled={loading} onClick={() => setPage(page + 1)}>Load more posts</button>
      </div>
    </>
  );
}

import React from "react";
import usePostsAsyncHook from "./usePostsAsyncHook.js";

export default function() {
  const [page, setPage] = React.useState(0);
  const [posts, loading, error] = usePostsAsyncHook(page);

  return (
    <>
      <h1>Hacker News page {page + 1}</h1>
      <div>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
    </>
  );
}

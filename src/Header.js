import React from "react";
import { Link } from "@reach/router"


export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link> |{" "}
      <Link to="hn">Hacker News</Link>
    </header>
  );
}

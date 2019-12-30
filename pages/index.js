import React from "react";
import Link from "next/link";

export default () => (
  <>
    <h1>Home page</h1>
    <Link href="/account">
      <p>Go to the account page.</p>
    </Link>
  </>
);

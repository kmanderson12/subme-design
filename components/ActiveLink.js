import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return (
    <li className={className}>
      <Link href={href} scroll={false}>
        {React.cloneElement(children)}
      </Link>
    </li>
  );
};

export default ActiveLink;

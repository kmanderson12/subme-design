import Link from "next/link";
import NavStyles from "../components/styles/NavStyles";

const Nav = () => {
  return (
    <NavStyles>
      <li>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Sign In</a>
        </Link>
      </li>
    </NavStyles>
  );
};

export default Nav;

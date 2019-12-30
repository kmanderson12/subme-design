import Link from "../components/Link";
import styled from "styled-components";

const Menu = styled.ul`
  margin: 0 auto;
  padding-left: 0;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 0.7;
  a {
    color: ${props => props.theme.colors.gray700};
  }
  li {
    font-weight: 400;
    padding: 1.5rem;
    /* padding-left: 0.275rem; */
    list-style-type: none;
    margin: 0;
    border-bottom: 2px solid transparent;
    text-align: center;
  }
  .selected {
    border-bottom: 2px solid ${props => props.theme.colors.blue400};
  }
  .selected > a {
    color: ${props => props.theme.colors.gray900};
  }
`;

const AccountNav = () => {
  return (
    <Menu>
      <Link href="/account">
        <a>Dashboard</a>
      </Link>

      <Link href="/account/profile">
        <a>Profile</a>
      </Link>
      <Link href="/account/messages">
        <a>Messages</a>
      </Link>

      <Link href="/account/preferences">
        <a>Preferences</a>
      </Link>
    </Menu>
  );
};

export default AccountNav;

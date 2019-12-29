import Link from "next/link";
import styled from "styled-components";

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0 0 0 2rem;
  position: relative;
  a {
    padding: 0.5rem 3rem;
    color: ${props => props.theme.colors.gray100};
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  img {
    height: 40px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>SubMe</a>
      </Link>
    </Logo>
  </StyledHeader>
);

export default Header;

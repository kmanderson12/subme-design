import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  li {
    list-style-type: none;
  }
  a {
    padding: 1rem 3rem;
    color: ${props => props.theme.colors.gray100};
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 400;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    /* @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    } */
  }
`;

export default NavStyles;

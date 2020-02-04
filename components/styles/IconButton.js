import styled from "styled-components";

const IconButton = styled.button`
  background: ${props => props.theme.colors.gray500};
  color: ${props => props.theme.colors.gray100};
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.6rem 0.75rem;
  outline: none;
  margin: 0.5rem 0;
  border-radius: 5px;
  font-weight: 800;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  svg {
    height: 14px;
    strokewidth: 3;
  }
`;

export default IconButton;

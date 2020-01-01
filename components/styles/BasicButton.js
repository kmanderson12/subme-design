import styled from "styled-components";

const BasicButton = styled.button`
  background: ${props => props.theme.colors.gray100};
  padding: 0.75rem 1rem;
  outline: none;
  border-radius: 5px;
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
`;

export default BasicButton;

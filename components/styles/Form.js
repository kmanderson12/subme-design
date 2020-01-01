import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  font-size: 1.5rem;
  color: #525252;
  line-height: 1.5;
  font-weight: 600;
  text-align: left;
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0 auto;
  color: ${props => props.theme.colors.gray700};
  label {
    display: block;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.gray700};
  }
  input,
  textarea,
  select {
    width: 100%;
    background: white;
    color: ${props => props.theme.colors.gray700};
    outline: none;
    padding: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1.5rem;
    font-family: "Montserrat";
    font-weight: 300;
    margin: 0;
    margin-bottom: 1.75rem;
    border: 1px solid ${props => props.theme.colors.gray200};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    /* border-radius: 6px; */
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.colors.gray600};
    }
  }
  input[type="submit"] {
    margin: 1rem 0;
    background: ${props => props.theme.yellow};
    color: white;
    border: 2px solid ${props => props.theme.blue};
    font-size: 2rem;
    font-weight: 600;
    border-radius: 8px;
    padding: 1rem 1.2rem;
  }
  input::placeholder {
    color: ${props => props.theme.colors.gray500};
  }
  img {
    border: 3px solid ${props => props.theme.colors.gray600};
  }
`;

export default Form;

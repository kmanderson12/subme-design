import styled from "styled-components";
import ChevronDown from "./styles/ChevronDown";

const Info = styled.div`
  flex: 1;
  display: inline-flex;
  align-items: center;
  padding-top: 0.5rem;
  justify-content: center;
  p {
    font-size: 11px;
    color: ${props => props.theme.colors.gray400};
    font-weight: 400;
  }
  svg {
    color: ${props => props.theme.colors.gray400};
    height: 18px;
    margin-top: 2px;
  }
`;

const Details = styled.div`
  display: none;
  height: 100px;
`;

const MoreInfo = props => {
  return (
    <>
      <Info>
        {props.altTag ? <p>{props.altTag}</p> : <p>More Info</p>}
        <ChevronDown />
      </Info>
    </>
  );
};

export default MoreInfo;

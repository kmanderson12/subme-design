import styled from "styled-components";
import ChevronDown from "./styles/ChevronDown";

const Card = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.bs1};
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 2rem 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
`;

const Content = styled.div`
  flex: 1;
  h4 {
    color: ${props => props.theme.colors.blue500};
    font-weight: 400;
  }
  p {
    color: ${props => props.theme.colors.blue300};
    opacity: 0.8;
  }
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const MoreInfo = styled.div`
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

const ItemCard = props => {
  return (
    <Card>
      <Content>
        <h4>{props.contentHeader}</h4>
        <p>{props.contentDetails}</p>
      </Content>
      <Break />
      <MoreInfo>
        <p>More Info</p>
        <ChevronDown />
      </MoreInfo>
    </Card>
  );
};

export default ItemCard;

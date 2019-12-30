import { useState } from "react";
import styled from "styled-components";
import MoreInfo from "./MoreInfo";
import Details from "./CardDetails";

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
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    box-shadow: ${props => props.theme.shadows.bs2};
  }
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

const ItemCard = props => {
  const [showDetails, setShowDetails] = useState(false);
  const toggle = () => setShowDetails(!showDetails);

  return (
    <Card onClick={toggle}>
      <Content>
        <h4>{props.contentHeader}</h4>
        <p>{props.contentDetails}</p>
      </Content>
      <Break />
      <MoreInfo />
      <Details showDetails={showDetails}>
        <p>Pleeeease! I need another day off.</p>
      </Details>
    </Card>
  );
};

export default ItemCard;

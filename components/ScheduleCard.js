import { useState } from "react";
import styled from "styled-components";
import CheckCircle from "./styles/CheckCircle";
import MoreInfo from "./MoreInfo";
import Details from "./CardDetails";
import InnerDetails from "./InnerDetails";

const Card = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.bs1};
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 2rem 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    box-shadow: ${props => props.theme.shadows.bs2};
  }

  svg.feather-check-circle {
    flex: 0.3;
    margin-left: -8px;
  }
`;

const LeftSide = styled.div`
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
const RightSide = styled.div`
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

const ScheduleCard = props => {
  const [showDetails, setShowDetails] = useState(false);
  const toggle = () => setShowDetails(!showDetails);

  return (
    <Card onClick={toggle}>
      <CheckCircle />
      <LeftSide>
        <h4>{props.leftTitle}</h4>
        <p>{props.leftSubtitle}</p>
      </LeftSide>
      <RightSide>
        <h4>{props.rightTitle}</h4>
        <p>{props.rightSubtitle}</p>
      </RightSide>
      <Break />
      <MoreInfo />
      <Details showDetails={showDetails}>
        <InnerDetails innerDetails={props.innerDetails} />
      </Details>
    </Card>
  );
};

export default ScheduleCard;

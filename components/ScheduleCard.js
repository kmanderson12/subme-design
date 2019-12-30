import styled from "styled-components";
import CheckCircle from "./styles/CheckCircle";

const Card = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.bs1};
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .svgIcon {
    flex: 0.25;
    margin: 0.75rem;
    margin-right: 1rem;
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

const ScheduleCard = props => {
  return (
    <Card>
      <CheckCircle className="svgIcon" />
      <LeftSide>
        <h4>{props.leftTitle}</h4>
        <p>{props.leftSubtitle}</p>
      </LeftSide>
      <RightSide>
        <h4>{props.rightTitle}</h4>
        <p>{props.rightSubtitle}</p>
      </RightSide>
    </Card>
  );
};

export default ScheduleCard;

import { useState } from "react";
import styled from "styled-components";
import MailIcon from "./styles/MailIcon";
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

  > svg {
    flex: 0.125;
    margin-left: -8px;
    color: ${props => props.theme.colors.gray500};
  }
  > svg.unread {
    color: ${props => props.theme.colors.blue500};
    fill: ${props => props.theme.colors.gray200};
  }
`;

const Content = styled.div`
  flex: 1;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  h4 {
    color: ${props => props.theme.colors.blue500};
    font-weight: 400;
    flex: 1;
  }
  p {
    color: ${props => props.theme.colors.blue300};
    opacity: 0.8;
    flex: 1;
  }
  span.date {
    color: ${props => props.theme.colors.gray500};
    font-size: 1.4rem;
    line-height: 2;
    flex: 0.1;
    margin-top: -1rem;
  }
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const MessageCard = props => {
  const [showDetails, setShowDetails] = useState(false);
  const toggle = () => setShowDetails(!showDetails);

  return (
    <Card onClick={toggle}>
      <MailIcon className={props.status} />
      <Content>
        <span className="date">{props.messageDate}</span>
        <h4>{props.leftTitle}</h4>
        <p>{props.leftSubtitle}</p>
      </Content>
      <Break />
      <MoreInfo />
      <Details showDetails={showDetails}>
        <InnerDetails innerDetails={props.innerDetails} />
      </Details>
    </Card>
  );
};

export default MessageCard;

import styled from "styled-components";
import MessageCard from "../components/MessageCard";

const ColumnTitle = styled.h2`
  color: ${props => props.theme.colors.gray700};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;

  > div:nth-of-type(1) {
    border: 2px solid ${props => props.theme.colors.gray700};
  }
`;

const Messages = () => {
  return (
    <Container>
      <Column>
        <ColumnTitle>Inbox</ColumnTitle>
        <MessageCard
          status="unread"
          messageDate="January 8th, 2020"
          leftTitle="NEW SUB REQUEST - January 10th, 2020 for Beth Williams"
          leftSubtitle="Beth Williams has requested a substitute for January 10th, 2020 for the Full Day. To accept..."
          innerDetails="Pleeeeeease! I need another day off!"
        />
        <MessageCard
          messageDate="January 5th, 2020"
          leftTitle="NEW SUB REQUEST - January 6th, 2020 for John Smith"
          leftSubtitle="John Smith has requested a substitute for January 6th, 2020 for the Full Day. To accept..."
          innerDetails="Just let them watch a movie, I don't care."
        />
      </Column>
    </Container>
  );
};

export default Messages;

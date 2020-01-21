import styled from "styled-components";
import SubSettings from "../components/SubSettings";
import BasicInfo from "../components/ProfileCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 1rem;
  min-width: 400px;
  max-width: 500px;
`;
const RightColumn = styled.div`
  flex: 1;
  padding: 1rem;
  min-width: 400px;
  max-width: 700px;
`;

const Settings = () => {
  return (
    <Container>
      <LeftColumn>
        <SubSettings />
      </LeftColumn>
      <RightColumn></RightColumn>
    </Container>
  );
};

export default Settings;

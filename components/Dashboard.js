import styled from "styled-components";
import SubSchedule from "./SubSchedule";
import AvailableOpenings from "./AvailableOpenings";

const DashboardContainer = styled.div`
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

const Dashboard = () => {
  return (
    <DashboardContainer>
      <LeftColumn>
        <SubSchedule />
      </LeftColumn>
      <RightColumn>
        <AvailableOpenings />
      </RightColumn>
    </DashboardContainer>
  );
};

export default Dashboard;

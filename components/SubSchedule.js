import styled from "styled-components";
import ScheduleCard from "./ScheduleCard";

const ColumnTitle = styled.h2`
  color: ${props => props.theme.colors.gray700};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 1.5rem;
`;

const SubSchedule = () => {
  return (
    <>
      <ColumnTitle>Schedule</ColumnTitle>
      <ScheduleCard
        leftTitle="Monday"
        leftSubtitle="January 6th, 2020"
        rightTitle="John Smith"
        rightSubtitle="Full Day"
      />
      <ScheduleCard
        leftTitle="Tuesday"
        leftSubtitle="January 7th, 2020"
        rightTitle="Beth Williams"
        rightSubtitle="8am - 11am"
      />
    </>
  );
};

export default SubSchedule;

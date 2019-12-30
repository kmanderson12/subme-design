import styled from "styled-components";
import ItemCard from "./ItemCard";

const ColumnTitle = styled.h2`
  color: ${props => props.theme.colors.gray700};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 1.5rem;
`;

const AvailableOpenings = () => {
  return (
    <>
      <ColumnTitle>Available Openings</ColumnTitle>
      <ItemCard
        contentHeader="Friday, January 10th, 2020"
        contentDetails="Beth Williams - Full Day"
      />
    </>
  );
};

export default AvailableOpenings;

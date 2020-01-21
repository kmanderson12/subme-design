import styled from "styled-components";

const ColumnTitle = styled.h2`
  color: ${props => props.theme.colors.gray700};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 1.5rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.bs1};
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 2rem;
  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  transition: all 0.3s ease;
  :hover {
    box-shadow: ${props => props.theme.shadows.bs2};
  }
  color: ${props => props.theme.colors.gray700};
  text-align: left;

  p {
    margin: 2rem;
  }
`;

const SubSettings = () => {
  return (
    <>
      <ColumnTitle>Settings</ColumnTitle>
      <Card>
        <h4>Settings Will Go Here</h4>
      </Card>
    </>
  );
};

export default SubSettings;

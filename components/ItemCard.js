import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 5px;
  max-width: 500px;
  min-height: 115px;
  box-shadow: ${props => props.theme.shadows.bs1};
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LeftSide = styled.div`
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
  h4 {
    color: ${props => props.theme.colors.blue500};
    font-weight: 400;
  }
  p {
    color: ${props => props.theme.colors.blue300};
    opacity: 0.8;
  }
`;

const ItemCard = (props) => {
  return (
    <Card>
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

export default ItemCard;

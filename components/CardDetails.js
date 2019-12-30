import styled from "styled-components";

const Details = styled.div`
  display: ${props => (props.showDetails === true ? `block` : `none`)};
  min-height: 100px;
  padding-top: 1rem;
  width: 95%;
  border-top: 2px solid #cbd5e080;
  color: ${props => props.theme.colors.gray600};
  font-weight: 300;
  transition: all 0.3s ease;
`;

export default Details;

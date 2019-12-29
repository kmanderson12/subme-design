import styled from "styled-components";

const CircleImg = styled.img`
  max-height: 150px;
  max-width: 150px;
  border-radius: 50%;
  border: 2px solid white;
`;

const Avatar = props => {
  return <CircleImg src={props.avatarImg} />;
};

export default Avatar;

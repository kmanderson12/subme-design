import { useContext } from "react";
import styled from "styled-components";
import { store } from "../components/context/UserProvider";
import Avatar from "../components/Avatar";

const HeaderProfile = props => {
  const globalState = useContext(store);
  const { name, role } = globalState.state;
  return (
    <HeaderProfileContainer>
      <Avatar avatarImg="/static/me_square.png" />
      <ProfileName>{name}</ProfileName>
      <ProfileRole>{role}</ProfileRole>
    </HeaderProfileContainer>
  );
};
export default HeaderProfile;

const HeaderProfileContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.25;
`;

const ProfileName = styled.h1`
  color: ${props => props.theme.colors.gray100};
  margin: 0;
`;
const ProfileRole = styled.h3`
  color: ${props => props.theme.colors.gray200};
  margin: 0;
  font-weight: 400;
`;

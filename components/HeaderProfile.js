import styled from "styled-components";
import Avatar from "../components/Avatar";

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

const HeaderProfile = props => {
  const name = "Kyle Anderson";
  const role = "Substitute Teacher";
  return (
    <HeaderProfileContainer>
      <Avatar avatarImg="static/me_square.png" />
      <ProfileName>{name}</ProfileName>
      <ProfileRole>{role}</ProfileRole>
    </HeaderProfileContainer>
  );
};
export default HeaderProfile;

import styled from "styled-components";

const Menu = styled.div`
  margin: 0 auto;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.gray700};
  opacity: 0.7;
  h4 {
    font-weight: 400;
    padding-right: 1.5rem;
  }
`;

const AccountNav = () => {
  return (
    <Menu>
      <h4>Dashboard</h4>
      <h4>Profile</h4>
      <h4>Messages</h4>
      <h4>Preferences</h4>
    </Menu>
  );
};

export default AccountNav;

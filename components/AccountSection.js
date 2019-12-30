import styled from "styled-components";
import AccountNav from "../components/AccountNav";
import Dashboard from "../components/Dashboard";

/*
  TODO:
  1. Better styling on menu.
  2. More styling on Card (icon, more info)
  3. Fix Avatar size (initially renders with no height) -> change to a fixed height div
  4. Fix header spacing
*/

const AccountContainer = styled.section`
  width: 100%;
  min-height: 600px;
  background: ${props => props.theme.colors.gray200};
  margin-top: 2rem;
`;

const AccountInner = styled.div`
  max-width: 900px;
  padding: 2rem;
  margin: 0 auto;
`;

const AccountSection = props => {
  return (
    <AccountContainer>
      <AccountInner>
        <AccountNav />
        <Dashboard />
      </AccountInner>
    </AccountContainer>
  );
};

export default AccountSection;

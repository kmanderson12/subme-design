import styled from "styled-components";
import AccountNav from "../components/AccountNav";
import Dashboard from "../components/Dashboard";

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
        {props.children}
      </AccountInner>
    </AccountContainer>
  );
};

export default AccountSection;

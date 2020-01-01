import HeaderProfile from "../components/HeaderProfile";
import AccountSection from "../components/AccountSection";
import Dashboard from "../components/Dashboard";

const Account = props => {
  return (
    <div>
      <HeaderProfile />
      <AccountSection>
        <Dashboard />
      </AccountSection>
    </div>
  );
};

export default Account;

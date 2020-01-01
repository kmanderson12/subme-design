import HeaderProfile from "../../components/HeaderProfile";
import AccountSection from "../../components/AccountSection";
import Dashboard from "../../components/Dashboard";

export default props => {
  return (
    <div>
      <HeaderProfile />
      <AccountSection>
        <Dashboard />
      </AccountSection>
    </div>
  );
};

import HeaderProfile from "../../components/HeaderProfile";
import AccountSection from "../../components/AccountSection";
import Settings from "../../components/Settings";

export default props => {
  return (
    <div>
      <HeaderProfile />
      <AccountSection>
        <Settings />
      </AccountSection>
    </div>
  );
};

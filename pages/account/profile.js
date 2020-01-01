import HeaderProfile from "../../components/HeaderProfile";
import AccountSection from "../../components/AccountSection";
import Profile from "../../components/Profile";

export default props => {
  return (
    <div>
      <HeaderProfile />
      <AccountSection>
        <Profile />
      </AccountSection>
    </div>
  );
};

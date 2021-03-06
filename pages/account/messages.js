import HeaderProfile from "../../components/HeaderProfile";
import AccountSection from "../../components/AccountSection";
import Messages from "../../components/Messages";

export default props => {
  return (
    <div>
      <HeaderProfile />
      <AccountSection>
        <Messages />
      </AccountSection>
    </div>
  );
};

import styled from "styled-components";
import AccountNav from "../components/AccountNav";
import ItemCard from "../components/ItemCard";

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
  background: ${props => props.theme.colors.gray100};
  margin-top: 2rem;
`;

const AccountInner = styled.div`
  max-width: 700px;
  padding: 2rem;
  margin: 0 auto;
`;

const AccountSection = () => {
  return (
    <AccountContainer>
      <AccountInner>
        <AccountNav />
        <ItemCard leftTitle="Monday" leftSubtitle="January 6th, 2020" rightTitle="John Smith" rightSubtitle="Full Day" />
        <ItemCard leftTitle="Tuesday" leftSubtitle="January 7th, 2020" rightTitle="Beth Williams" rightSubtitle="8am - 11am" />
      </AccountInner>
    </AccountContainer>
  );
};

export default AccountSection;

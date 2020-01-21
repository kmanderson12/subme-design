import styled from "styled-components";

const BannerDiv = styled.div`
  background: #203c4c73;
  color: white;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: 300;
`;

const Banner = () => {
  return (
    <BannerDiv>
      <p>
        Hey there! This app is a work in progress, but feel free to look around!
      </p>
    </BannerDiv>
  );
};

export default Banner;

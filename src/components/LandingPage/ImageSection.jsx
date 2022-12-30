import styled from "styled-components";
import heroeth from "../../assets/Home/heroeth.webp";

const ImageSection = () => {
  return (
    <>
      <>
        <StyledContent>
          <img src={heroeth} alt="" />
        </StyledContent>
      </>
    </>
  );
};

// Styling

const StyledContent = styled.div`
  margin-top: -80px;
  z-index: 2;
  text-align: center;
  img {
    width: 80%;

    @media screen and (min-width: 768px) {
        margin-top: 50px;
        width: 60%;
    }
    @media screen and (min-width: 1280px) {
        margin-top: 80px;
        width: 60%;
    }
  }
`;

export default ImageSection;

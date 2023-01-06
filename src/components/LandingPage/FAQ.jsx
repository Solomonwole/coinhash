import styled from "styled-components";
import { StyledH3 } from "../Styles/Styled";
import faq from "../../assets/Home/faq.svg";
import FAQComp from "../FAQ/FAQComp";

const FAQ = () => {
  return (
    <>
      <StyledFaq id="faq">
        <img src={faq} alt="" className="timg" />
        <StyledH3 className="width">Frequently Asked Questions</StyledH3>
        <br />
        <FAQComp />
      </StyledFaq>
    </>
  );
};

// Styling

const StyledFaq = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .timg {
    margin-bottom: 15px;
  }
  .width {
    width: 60%;
    text-align: center;
  }
`;

export default FAQ;

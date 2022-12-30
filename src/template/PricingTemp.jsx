import styled from "styled-components";
import {
  StyledButton,
  StyledH2,
  StyledH3,
  StyledHP,
} from "../components/Styles/Styled";
import { Link } from "react-router-dom";


const PricingTemplate = ({ prices, onClick }) => {
  return (
    <>
      {prices.map((price, key) => {
        return (
          <>
            <StyledBox>
              <StyledHead>
                <StyledH3>{price.days}</StyledH3>
                <StyledH2 className="prices">{price.price}</StyledH2>
              </StyledHead>
              <StyledInfo>
                <div className="info">
                  <StyledHP>Hashrate Fee</StyledHP>
                  <StyledHP className="blue">{price.hashfee}</StyledHP>
                </div>
                <div className="info">
                  <StyledHP>Electricity Rate</StyledHP>
                  <StyledHP className="blue">{price.electricity}</StyledHP>
                </div>
                <div className="info">
                  <StyledHP>Historical Output</StyledHP>
                  <StyledHP className="blue">{price.historical}</StyledHP>
                </div>
                <div className="info">
                  <StyledHP>Static Revenue Rate</StyledHP>
                  <StyledHP className="blue">{price.revenue}</StyledHP>
                </div>
              </StyledInfo>
              <Link to={price.link} onClick={onClick}><StyledButton>Start mining</StyledButton></Link>
            </StyledBox>
          </>
        );
      })}
    </>
  );
};

// Styling
const StyledBox = styled.div`
  height: 460px;
  // width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 2px solid rgba(4, 114, 226, 1);
  padding: 20px 10px;
  margin: 10px 0;
`;
const StyledHead = styled.div`
  .prices {
    background: linear-gradient(180deg, #0ac389 0%, #0472e2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
const StyledInfo = styled.div`
  .info {
    display: flex;
    justify-content: space-between;
    // width: 330px;
    width: 300px;
    color: rgba(223, 223, 223, 0.83);

    .blue {
      background: linear-gradient(180deg, #0ac389 10%, #0472e2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      // margin-left: 30px;
    }
   
    @media screen and (max-width: 320px){
      width: 250px;
    }
  }
`;
export default PricingTemplate;

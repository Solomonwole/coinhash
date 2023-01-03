import styled from "styled-components";
import { StyledButton, StyledH1, StyledHP } from "../Styles/Styled";
import { Link } from "react-router-dom";
import mining from "../../assets/Home/mining.svg"

const Hero = () => {
 
  return (
    <>
      <StyledHero>
        <div className="left">
          <StyledH1>Easy Bitcoin & Ethereum mining.</StyledH1>
          <Link to="/login">
            <StyledButton className="space">Get Started</StyledButton>
          </Link>
        </div>
        <div className="right">
          <StyledHP>
            CoinHash Cloud Mining enables users that don’t have access to mining
            equipment earn by mining their coins with us. You can purchase
            hashrates from the Cloud Mining packages and start accumulating coin
            in your Funding Wallet.
          </StyledHP>
          <img src={mining} alt="" />
        </div>
      </StyledHero>
    </>
  );
};

const StyledHero = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .space {
      margin-top: 30px;
    }
  }

  .right {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 60vh;
    .left{
      width: 60%;
      text-align: start;
      justify-content: flex-start;
      align-items: start;
    }
    .right {
      display: block;
      width: 40%;
      text-align: justify;

      img{
        position: absolute;
        width: 50%;
        margin-top: 50px;
        right: 30px;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    height: 90vh;

  }
`;
export default Hero;

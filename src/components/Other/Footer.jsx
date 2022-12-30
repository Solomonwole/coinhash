import styled from "styled-components";
import { StyledButton, StyledH2, StyledHP } from "../Styles/Styled";
import Logo from "../../assets/logo_d.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledBox>
          <StyledH2 className="width">Ready To Get Started?</StyledH2>
          <Link to="/login"><StyledButton className="black">Get Started</StyledButton></Link>
        </StyledBox>
      </StyledFooter>
      <StyledFooter>
        <img src={Logo} alt="Coin Hash" />
        <div className="ts">
          <Link to="/">
            <StyledHP>TERMS OF SERVICE</StyledHP>
          </Link>
          <Link to="/">
            <StyledHP>PRIVACY AND POLICY</StyledHP>
          </Link>
        </div>
        <StyledHP className="cop">© copyright 2018 - 2022 | coinhash</StyledHP>
      </StyledFooter>
    </>
  );
};

//Styling

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  .ts {
    display: grid;
    grid-template-colums: 1fr;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    margin: 20px 0;
    a {
      color: #0472e2;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .cop {
    margin: 30px 0;
    color: rgba(255, 255, 255, 0.61);
  }
`;
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 269px;
  background: linear-gradient(90deg, #0ac389 0%, #0472e2 100%);
  border-radius: 8px;

  .black {
    background: #000;
    margin-top: 20px;
  }
  .width {
    width: 70%;
  }
`;

export default Footer;

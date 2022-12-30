import styled from "styled-components";
import Feature from "../../assets/Home/Features.svg";
import Laptop from "../../assets/Home/laptop.svg";
import { StyledButton, StyledH2, StyledH3, StyledHP } from "../Styles/Styled";
import Check from "../../assets/Home/check.svg";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <StyledFeatures>
        <img src={Feature} alt="" className="timg" />
        <StyledH3>Our Main Features</StyledH3>
        <div className="slide"></div>
        <img src="" alt="" />
        <div className="slide"></div>

        <StyledDown>
          <div className="left">
            <StyledH2 className="align">Real-time mining monitoring</StyledH2>
            <StyledHP className="space">
              Simple and easy to use, with clear and transparent statistics
            </StyledHP>

            <div className="list">
              <ul>
                <li>
                  <img src={Check} alt="" />
                  No need to buy equipment
                </li>
                <li>
                  <img src={Check} alt="" />
                  No maintenance fee
                </li>
                <li>
                  <img src={Check} alt="" />
                  No equipment downtime
                </li>
                <li>
                  <img src={Check} alt="" />
                  Mining starts immediately after payment
                </li>
              </ul>
            </div>

            <div className="center">
              <Link to="/login">
                <StyledButton>Start mining</StyledButton>
              </Link>
            </div>
          </div>

          <div className="right">
            <img src={Laptop} alt="" />
          </div>
        </StyledDown>
      </StyledFeatures>
    </>
  );
};

// Styling
const StyledFeatures = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .timg {
    margin-bottom: 15px;
  }
`;
const StyledDown = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  flex-direction: column-reverse;
  align-items: center;

  .left {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    .space {
      margin-top: 20px;
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: start;
      }
    }

    .list {
      margin-top: 50px;

      ul {
        margin-left: 5px;
        li {
          list-style: none;
          margin-bottom: 10px;
          img {
            margin-right: 15px;
          }
        }
      }
    }
    .center {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      @media screen and (min-width: 768px) {
        justify-content: flex-start;
      }
    }
  }

  .right {
    text-align: center;
    img {
      width: 80%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    text-align: start;

    .align {
      display: flex;
      justify-content: flex-start;
      text-align: start;
    }

    .right {
      img {
        width: 100%;
      }
    }
  }
`;
export default Features;

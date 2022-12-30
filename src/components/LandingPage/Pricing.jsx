import styled from "styled-components";
import { useState } from "react";
import price from "../../assets/Home/price.svg";
import btc from "../../assets/Home/btc.svg";
import eth from "../../assets/Home/Eth.svg";
import btcC from "../../assets/Home/btc-c.svg";
import ethB from "../../assets/Home/Eth-b.svg";
import { StyledH3 } from "../Styles/Styled";
import BTCTab from "./PricingTab/BTC";
import ETHTab from "./PricingTab/ETH";

const PricingSection = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };
  return (
    <>
      <StyledPrice id="pricing">
        <img src={price} alt="" className="timg" />
        <StyledH3 className="width">Choose the plan that suits you</StyledH3>
        <StyledTabBorder>
          <div
            className={tab === 1 ? "btc active" : "btc inactive"}
            onClick={() => toggleTab(1)}
          >
            <img src={tab === 1 ? btc : btcC} alt="" />
            Bitcoin
          </div>

          <div
            className={tab === 2 ? "eth active" : "eth in-active"}
            onClick={() => toggleTab(2)}
          >
            <img src={tab === 2 ? ethB : eth} alt="" />
            Ethereum
          </div>
        </StyledTabBorder>
        {tab === 1 && <BTCTab />}
        {tab === 2 && <ETHTab />}
      </StyledPrice>
    </>
  );
};

// Styling

const StyledPrice = styled.div`
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
const StyledTabBorder = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 320px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: linear-gradient(90deg, #0ac389 0%, #0472e2 100%);
  border: 2px solid #0472e2;

  .btc,
  .eth {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 58px;
    width: 160px;
    img {
      margin: 0 5px;
    }
  }

  .in-active {
    margin-right: 2px;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
  }

  .active {
    background: linear-gradient(90deg, #0ac389 0%, #0472e2 100%);
    border-radius: 5px;
    color: #000;
    font-weight: 700;
    cursor: pointer;
  }
`;
export default PricingSection;

import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import styled from 'styled-components';
import btc from '../../assets/Home/btc.svg';
import eth from '../../assets/Home/Eth.svg';
import btcC from '../../assets/Home/btc-c.svg';
import ethB from '../../assets/Home/Eth-b.svg';
import { StyledH2, StyledH3 } from '../../components/Styles/Styled';
import { ToastContainer } from 'react-toastify';
import BtcPackage from './Packages/BtcPackage';
import EthPackage from './Packages/EthPackage';

function HashRate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };
  return (
    <DashboardLayout>
      <StyledPrice id="pricing">
        <StyledH2>Buy HashRate</StyledH2>
        <StyledBox>
          <StyledH3>Choose the plan that suits you</StyledH3>
          <hr />
         <div className="divtab">
         <StyledTabBorder>
            <div
              className={tab === 1 ? 'btc active' : 'btc inactive'}
              onClick={() => toggleTab(1)}
            >
              <img src={tab === 1 ? btc : btcC} alt="" />
              Bitcoin
            </div>

            <div
              className={tab === 2 ? 'eth active' : 'eth in-active'}
              onClick={() => toggleTab(2)}
            >
              <img src={tab === 2 ? ethB : eth} alt="" />
              Ethereum
            </div>
          </StyledTabBorder>
         </div>
          {tab === 1 && <BtcPackage />}
          {tab === 2 && <EthPackage />}
        </StyledBox>
      </StyledPrice>
      <ToastContainer />
    </DashboardLayout>
  );
}
// Styling

const StyledBox = styled.div`
  width: 100%;
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 20px;

  hr {
    margin: 20px 0;
  }

  .divtab{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

 
  @media screen and (max-width: 375px){
    padding: 0;
    background: transparent;
  }
  
`;

const StyledPrice = styled.div`
  margin: 50px 0;
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

  @media screen and (max-width: 360px){
    width: 300px;
  }
  @media screen and (max-width: 320px){
    width: 250px;
  }
`;
export default HashRate;

import DashboardLayout from '../../../layout/DashboardLayout';
import styled from 'styled-components';
import {
  StyledButton,
  StyledH2,
  StyledH3,
  StyledHP,
} from '../../../components/Styles/Styled';
import { Link } from 'react-router-dom';

const BtcPackage = () => {
  const pprice = 5000;
  const p2price = 10000;
  const p3price = 30000;


  const hadle500 = () => {
    localStorage.setItem('Price', pprice);
  };
  const hadle1500 = () => {
    localStorage.setItem('Price', p2price);
  };
  const hadle3000 = () => {
    localStorage.setItem('Price', p3price);
  };

  return (
    <>
      <DashboardLayout>
        <Styled>
          <StyledH3 className="title">Select BTC Package</StyledH3>
        </Styled>
        <StyledP>
          <StyledBox>
            <StyledHead>
              <StyledH3>91 Days | 6T</StyledH3>
              <StyledH2 className="prices">${pprice}</StyledH2>
            </StyledHead>
            <StyledInfo>
              <div className="info">
                <StyledHP>Hashrate Fee</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Electricity Rate</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Historical Output</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Static Revenue Rate</StyledHP>
                <StyledHP className="blue">50.31%</StyledHP>
              </div>
            </StyledInfo>
            <Link to="/deposit-btc" onClick={hadle500}>
              <StyledButton>Start mining</StyledButton>
            </Link>
          </StyledBox>

          {/* second  */}

          <StyledBox>
            <StyledHead>
              <StyledH3>91 Days | 6T</StyledH3>
              <StyledH2 className="prices">${p2price}</StyledH2>
            </StyledHead>
            <StyledInfo>
              <div className="info">
                <StyledHP>Hashrate Fee</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Electricity Rate</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Historical Output</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Static Revenue Rate</StyledHP>
                <StyledHP className="blue">50.31%</StyledHP>
              </div>
            </StyledInfo>
            <Link to="/deposit-btc" onClick={hadle1500}>
              <StyledButton>Start mining</StyledButton>
            </Link>
          </StyledBox>

          {/* Third  */}

          <StyledBox>
            <StyledHead>
              <StyledH3>91 Days | 6T</StyledH3>
              <StyledH2 className="prices">${p3price}</StyledH2>
            </StyledHead>
            <StyledInfo>
              <div className="info">
                <StyledHP>Hashrate Fee</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Electricity Rate</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Historical Output</StyledHP>
                <StyledHP className="blue">0.0071 USD/T/Days</StyledHP>
              </div>
              <div className="info">
                <StyledHP>Static Revenue Rate</StyledHP>
                <StyledHP className="blue">50.31%</StyledHP>
              </div>
            </StyledInfo>
            <Link to="/deposit-btc" onClick={hadle3000}>
              <StyledButton>Start mining</StyledButton>
            </Link>
          </StyledBox>
        </StyledP>
      </DashboardLayout>
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

    @media screen and (max-width: 320px) {
      width: 250px;
    }
  }
`;
// Styling

const Styled = styled.div`
  .title {
    text-align: center;
    margin: 30px 0;
  }
`;

const StyledP = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }
`;
export default BtcPackage;

import styled from 'styled-components';
import { StyledH3, StyledHP } from '../Styles/Styled';
import Btc from '../../assets/Dashboard/btc.svg';
import Eth from '../../assets/Dashboard/eth.svg';
import { Link } from 'react-router-dom';

const CoinSelect = ({ open, close }) => {
  if (!open) return null;
  return (
    <>
      <StyledOverlay onClick={close}>
        <StyledContainer>
          <StyledH3>Select Coin</StyledH3>
          <div className="flex">
            <Link to="/bitcoin">
              <div className="card">
                <img src={Btc} alt="" />
                <StyledHP>BTC</StyledHP>
              </div>
            </Link>
            <Link to="/ethereum">
              <div className="card">
                <img src={Eth} alt="" />
                <StyledHP>ETH</StyledHP>
              </div>
            </Link>
          </div>
        </StyledContainer>
      </StyledOverlay>
    </>
  );
};

//Styling

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 16, 32, 0.8);
  //   z-index: 2;
`;
const StyledContainer = styled.div`
  background: #001020;
  border-radius: 8px;
  width: 90%;
  height: 306px;

  z-index: 50;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .flex {
    display: flex;

    .card {
      margin: 5px;
      text-align: center;
      padding: 8px;
      border: 1px solid #0472e2;
      border-radius: 8px;
      width: 120px;
      img {
        width: 68px;
        height: 68px;
      }
    }
  }

  @media screen and (max-width: 820px){
    left: 50%;
  }
`;

export default CoinSelect;

import styled from 'styled-components';
import Roadmap from '../../assets/Home/Roadmap.svg';
import signup from '../../assets/Home/signup.svg';
import minec from '../../assets/Home/minec.svg';
import arrow from '../../assets/Home/arrow.svg';
import withdraw from '../../assets/Home/withdraw.svg';
import { StyledH3, StyledHP } from '../Styles/Styled';

const RoadmapSection = () => {
  return (
    <>
      <StyledRoad id='how-it-works'>
        <img src={Roadmap} alt="" />
        <StyledH3>How it works</StyledH3>
        <StyledMobile>
          <div className="one">
            <img src={signup} alt="" />
            <StyledH2>Sign up</StyledH2>
            <StyledHP>
              Click on the Sign up button above to create a CoinHash account,
              and login afterwards.
            </StyledHP>
          </div>

          <img src={arrow} alt="" className="arrow" />
          <div className="one">
            <img src={minec} alt="" />
            <StyledHP>
              <StyledH2>Mine Coin</StyledH2>
              On the user dashboard, hit the Mine button, select a coin, then
              package, enter details and make payment.
            </StyledHP>
          </div>
          <img src={arrow} alt="" className="arrow" />
          <div className="one">
            <img src={withdraw} alt="" />
            <StyledH2>Withdraw</StyledH2>
            <StyledHP className="width">
              Your coin mining will appear in real-time on your dashboard, you
              can make a withdraw once a month.
            </StyledHP>
          </div>
        </StyledMobile>
      </StyledRoad>
    </>
  );
};

// Styling
const StyledRoad = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .timg {
    margin-bottom: 15px;
  }
`;
const StyledMobile = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  .arrow {
    display: none;
  }

  .one {
    margin-top: 30px;
    width: 70%;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    .arrow {
      display: block;
      width: 50%;
      margin-top: -150px;
    }
  }
`;
const StyledH2 = styled.h3`
  margin: 20px 0;
`;

export default RoadmapSection;

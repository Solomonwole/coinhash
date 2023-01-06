import styled from 'styled-components';
import { StyledHP } from '../Styles/Styled';
import { useState } from 'react';
import CoinSelect from './CoinSelect';
import { toast, ToastContainer } from 'react-toastify';
import { RxAvatar } from 'react-icons/rx';
import BTC from './Tabs/BTC';
import ETH from './Tabs/ETH';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [open, setOpen] = useState(false);
  const userName = localStorage.getItem('HashuserName');
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  // const handleCoin = () => {
  //   setOpen(true);
  // };
  // const handlelow = () => {
  //   toast.error('Low wallet balance', {
  //     autoClose: 1000,
  //   });
  // };
  return (
    <>
      <StyledDash>
        <StyledTabs>
          <StyledTab
            className={tab === 1 ? 'active' : 'in-active'}
            onClick={() => toggleTab(1)}
          >
            BTC
          </StyledTab>
          <StyledTab
            className={tab === 2 ? 'active' : 'in-active'}
            onClick={() => toggleTab(2)}
          >
            ETH
          </StyledTab>
          <StyledTab
            className="in-active"
            onClick={() => toast.error('Coming soon')}
          >
            Dash
          </StyledTab>
          <StyledTab
            className="in-active"
            onClick={() => toast.error('Coming soon')}
          >
            BCH
          </StyledTab>
          <StyledTab
            className="in-active"
            onClick={() => toast.error('Coming soon')}
          >
            XRP
          </StyledTab>
          <StyledTab
            className="in-active"
            onClick={() => toast.error('Coming soon')}
          >
            LTC
          </StyledTab>
          <StyledTab
            className="in-active"
            onClick={() => toast.error('Coming soon')}
          >
            TRX
          </StyledTab>
          <StyledTab
            className="in-active"
            onClick={() => toast.error('Coming soon')}
          >
            BNB
          </StyledTab>
          <StyledTab
            className="in-active"
            onClick={() => toast.error('Coming soon')}
          >
            BSV
          </StyledTab>
        </StyledTabs>
        <StyledWelcome>
          <Link to="/settings">
            {' '}
            <StyledHP>Hi, {userName} </StyledHP>
          </Link>
          <Link to="/settings">
            {' '}
            <RxAvatar className="icon" />
          </Link>
        </StyledWelcome>
        {tab === 1 && <BTC />}
        {tab === 2 && <ETH />}
        {/* <>
          <StyledWalletBalance>
            <div className="bal">
              <StyledHP>Wallet Balance</StyledHP>
            </div>
            <StyledH3 className="balance">$0.00</StyledH3>
            <div className="flex">
              <StyledButton className="btn" onClick={handleCoin}>
                MINE COIN
              </StyledButton>
              <StyledButton className="btn" onClick={handlelow}>
                WITHDRAW
              </StyledButton>
            </div>
          </StyledWalletBalance>
          <StyledBalance>
            <div className="btc">
              <StyledH3>$0.00</StyledH3>
              <StyledHP>BTC</StyledHP>
            </div>
            <div className="eth">
              <StyledH3>$0.00</StyledH3>
              <StyledHP>ETH</StyledHP>
            </div>
          </StyledBalance>
          <StyledHistory>
            <StyledH3>HISTORY</StyledH3>
            <StyledHP className="not">No transactions yet!</StyledHP>
          </StyledHistory>
        </> */}
      </StyledDash>
      <CoinSelect open={open} close={() => setOpen(false)} />
      <ToastContainer />
    </>
  );
};

// Styling

// const StyledWalletBalance = styled.div`
// background: #0472E2;
// width: 100%;
// padding: 7%;
// height: 328px;
// border-radius: 8px;


// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: space-between;

// .balance{
//     font-size: 40px
// }

// .bal{
//     text-align: center;
// }

// .flex{
//     display flex;
//     width: 50%;
//     justify-content: space-between;
// }
// .btn{
//     background: #0ac389;
// }

// @media screen and (max-width: 1140px){
//     margin-top: 30px;
// }
// @media screen and (max-width: 938px){
//     .flex{
//         width: 55%;
//     }
// }
// @media screen and (max-width: 778px){
//     .flex{
//         width: 60%;
//     }
// }
// @media screen and (max-width: 696px){ 
//     padding: 7% 10px;
//     .flex{
//         width: 100%;
//         .btn{
//             margin: 0 5px;
//             width: 130px;
//   height: 50px;
//         } 
//     }
// }
// @media screen and (max-width: 534px){
//     height: 290px;
   
//     .flex{
//         width: 100%;
//         justify-content: center;
//         align-items: center;

//         .btn{
//             margin-bottom: 5px;
//         }
//     }
// }
// @media screen and (max-width: 375px){

//     .btn{
//         width: 130px;
//   height: 55px;
//     }
// }
// @media screen and (max-width: 320px){

//     .btn{
//         width: 100px;
//   height: 50px;
//   font-size: 14px;
//     }
// }

// `;

const StyledDash = styled.div`
overflow-x: hidden;
`
const StyledWelcome = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  aign-items: center;
  margin-bottom: 20px;
  .icon {
    font-size: 25px;
    margin-left: 5px;
    color: #0ac389;
  }

  a:hover {
    color: #0ac389;
  }

  
`;

const StyledTabs = styled.div`
  width: 100%;
  height: 70px;
  background: #011c37;
  border-radius: 8px;
  border: 1px solid #0ac389;
  margin-bottom: 30px;
  padding: 0 10px;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .active {
    opacity: 1;
  }
  .in-active {
    opacity: 0.5;
  }
`;
const StyledTab = styled.div`
  min-width: 100px;
  height: 50px;
  background: #0ac389;
  border-radius: 8px;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// const StyledBalance = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   margin: 20px 0;
//   .btc {
//     background: #25765d;
//     border-radius: 8px;
//     width: 49%;
//     height: 198px;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
//   }
//   .eth {
//     background: #25765d;
//     border-radius: 8px;
//     width: 49%;
//     height: 198px;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
//   }
//   .rate {
//     font-size: 14px;
//   }
//   span {
//     color: #c10000;
//   }

//   @media screen and (max-width: 534px) {
//     .btc {
//       height: 138px;
//     }
//     .eth {
//       height: 138px;
//     }
//   }
// `;
// const StyledHistory = styled.div`
//   width: 100%;
//   margin: 50px 0;
//   .not {
//     color: #c10000;
//     margin: 20px 0;
//     text-align: center;
//   }
// `;
export default DashboardPage;

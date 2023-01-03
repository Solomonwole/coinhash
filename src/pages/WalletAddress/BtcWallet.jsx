import DashboardLayout from '../../layout/DashboardLayout';
import styled from 'styled-components';
import { StyledButton, StyledHP } from '../../components/Styles/Styled';
import btcbarcode from '../../assets/Dashboard/barcode.jpg';
import { AiOutlineCopy } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { db, auth } from '../../firebase/FirebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';


const BtcWallet = () => {
  const price = localStorage.getItem('Price');
  const btcwallet = localStorage.getItem('BTC');
  const [date, setDate] = useState(new Date());

  const handleCopy = () => {
    navigator.clipboard.writeText('bc1q763k9npdy9sddy5krww38nwmntdj894klnmwep');
    toast.success('Wallet address copied', {
      autoClose: 1000,
    });
  };

  const handleDone = async (id) => {
    toast.success('Verifying transaction...');

    try {
      setDate(new Date());
      const day = date.getUTCDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getUTCFullYear();

      const fullDate = {day, month, year};
      
      const userRef = doc(db, "users", auth.currentUser.uid);
      updateDoc(userRef,{
        balance: price,
        btc: price,
        btcwallet: btcwallet,
        price: price,
        date: fullDate
      })
      console.log(fullDate)
      
    } catch (error) {}
    localStorage.removeItem('BTC');
    localStorage.removeItem('ETH');
    localStorage.removeItem('Price');
  };
  return (
    <>
      <DashboardLayout>
        <StyledPage>
          <img src={btcbarcode} alt="" />
          <StyledHP>
            Amount: <b>${price}</b>
          </StyledHP>
          <div className="wallAdd">
            <StyledHP className="wallet">Wallet address:</StyledHP>
          </div>
          <StyledCopy onClick={handleCopy}>
            <AiOutlineCopy />
            &nbsp; <b>bc1q76....mwep</b>
          </StyledCopy>
          <StyledInfo>
            <b>Instruction:</b>
            <p>- Copy your coinhash wallet address above to make deposit.</p>
            <p>- Make deposit within 10mins, a timer is above. </p>
            <p>- Send the exact amount above. </p>
            <p>- Only click “Done” button after successful transfer.</p>
          </StyledInfo>
          <Link to="/dashboard" onClick={handleDone}>
            <StyledButton>Done</StyledButton>
          </Link>
        </StyledPage>
      </DashboardLayout>
      <ToastContainer />
    </>
  );
};

// Styling

const StyledPage = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 200px;
    margin-bottom: 20px;
  }
  .wallAdd {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledInfo = styled.div`
  color: #c10000;
  text-align: start;
  margin: 30px 0;
`;

const StyledCopy = styled.div`
  cursor: pointer;
  width: 55%;
  height: 50px;
  background: rgb(14, 29, 44, 0.6);
  padding: 0 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #0472e2;
`;

export default BtcWallet;

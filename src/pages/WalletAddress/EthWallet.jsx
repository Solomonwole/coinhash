import DashboardLayout from '../../layout/DashboardLayout';
import styled from 'styled-components';
import { StyledButton, StyledHP } from '../../components/Styles/Styled';
import btcbarcode from '../../assets/Dashboard/barcodeeth.jpg';
import { AiOutlineCopy } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase/FirebaseConfig';

const EthWallet = () => {
  const price = localStorage.getItem('Price');
  const user = auth.currentUser;

  const handleCopy = () => {
    navigator.clipboard.writeText('0xDeBd312D678280D935B9EF4393d1912BE7Ac3807');
    toast.success('Wallet address copied', {
      autoClose: 1000,
    });
  };

  const handleDone = () => {
    toast.success('Verifying transaction...');

    try {
      addDoc(collection(db, 'eth'), {
        userName: user.displayName,
        email: user.email,
        uid: user.uid,
        price: price,
      });
    } catch (error) {}
    localStorage.removeItem('Price');
  };
  return (
    <>
      {' '}
      <DashboardLayout>
        <StyledBox>
          <StyledPage>
            <img src={btcbarcode} alt="" />
            <StyledHP>
              Amount: <b>{price}</b>
            </StyledHP>
            <div className="wallAdd">
              <StyledHP className="wallet">Wallet address:</StyledHP>
            </div>
            <StyledCopy onClick={handleCopy}>
              <AiOutlineCopy />
              &nbsp; <b>0xDeBd....3807</b>
            </StyledCopy>
            <StyledInfo>
              <b>Instruction:</b>
              <p>- Copy your coinhash wallet address above to make deposit.</p>
              <p>- Make deposit within 10mins, a timer is above. </p>
              <p>- Send the exact amount above. </p>
              <p>- Only click “Done” button after successful transfer.</p>
            </StyledInfo>
            <Link to="/dashboard" onClick={handleDone}>
              <StyledButton className='btn'>Done</StyledButton>
            </Link>
          </StyledPage>
        </StyledBox>
      </DashboardLayout>
      <ToastContainer />
    </>
  );
};

// Styling
const StyledBox = styled.div`
  width: 100%;
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 50px;

  hr {
    margin: 20px 0;
  }
`;
const StyledPage = styled.div`
  margin: 30px 0;
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
  .btn{
    background: #0AC389;
  }
`;
const StyledInfo = styled.div`
  color: #fff;
  text-align: start;
  margin: 30px 0;
`;

const StyledCopy = styled.div`
  cursor: pointer;
  width: 55%;
  height: 50px;
  background: #001020;
  padding: 0 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #0472e2;
`;

export default EthWallet;

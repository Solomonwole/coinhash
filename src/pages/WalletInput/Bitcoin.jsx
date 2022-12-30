import styled from 'styled-components';
import {
  StyledButton,
  StyledH3,
  StyledHP,
} from '../../components/Styles/Styled';
import DashboardLayout from '../../layout/DashboardLayout';
import { AiOutlineWarning } from 'react-icons/ai';
import { useState } from 'react';
import ErrorMessage from '../../components/Error/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Bitcoin = () => {
  const navigate = useNavigate();
  const [btcwallet, setBtcwallet] = useState('');
  const [trySubmit, setTrySubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWallet = (e) => {
    setBtcwallet(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrySubmit(true);
    if (btcwallet !== '') {
      setLoading(true);
      localStorage.setItem('BTC', btcwallet);
      navigate('/btc-package');
    } else {
    }
  };
  return (
    <>
      <DashboardLayout>
        <StyledPage>
          <StyledH3>Enter BTC wallet Address </StyledH3>
          <div className="content">
            <StyledHP className="info">
              <AiOutlineWarning /> &nbsp; Only send btc from this address, this
              will be the only address you can withdraw your earnings to.{' '}
            </StyledHP>
            <form>
              <textarea
                name="btc-wallet"
                id="btc-wallet"
                rows="8"
                placeholder="Enter wallet address"
                value={btcwallet}
                onChange={handleWallet}
              ></textarea>
              {!btcwallet && trySubmit ? (
                <ErrorMessage error="Field Required" />
              ) : (
                ''
              )}
              {!loading ? (
                <StyledButton className="btn" onClick={handleSubmit}>
                  Deposit
                </StyledButton>
              ) : (
                <StyledButton className="btn">
                  <div className="loader"></div>
                </StyledButton>
              )}
            </form>
          </div>
        </StyledPage>
      </DashboardLayout>
    </>
  );
};

// Styling

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info {
    color: #c10000;
    width: 50%;
    text-align: start;
    margin-top: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    textarea{
        width: 80%;
       padding: 15px;
       border-radius: 8px;
       border: 2px solid #0472e2;
       background: rgb(14, 29, 44, 0.6);
       color: #fff;
       margin: 10px 0;
       &:focus{
        outline: none;
       }
    }
    .btn{
        width: 80%;
    }
  }

  @media screen and (max-width: 1140px){
    margin-top: 50px;

    .info {
        margin-top: 50px;
        width: 100%;
      }
    form{
        width: 100%;

        textarea{
            width: 100%;
        } .btn{
            width: 100%;
        }
    }
}
`;
export default Bitcoin;

import DashboardLayout from '../../layout/DashboardLayout';
import { updateProfile } from 'firebase/auth';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase/FirebaseConfig';
import { updatePassword } from 'firebase/auth';
import {
  StyledButton,
  StyledH3,
  StyledHP,
} from '../../components/Styles/Styled';
import ErrorMessage from '../../components/Error/ErrorMessage';
import { toast, ToastContainer } from 'react-toastify';

const Settings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [trySubmit, setTrySubmit] = useState('');
  const [match, setMatch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [btcwallet, setBtcwallet] = useState('');
  const [ethwallet, setEthwallet] = useState('');

  const userName = localStorage.getItem('HashuserName');
  const userEmail = localStorage.getItem('HashuserEmail');

  //  const btcwallet = localStorage.getItem('Hashbtcwallet');
  //  const ethwallet = localStorage.getItem('Hashethwallet');

  useEffect(() => {
    if (password === confirmPassword) {
      setMatch(true);
    }
  }, [confirmPassword, password]);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrySubmit(true);
    if (password && confirmPassword !== null) {
      if (password.length > 6) {
        if (password === confirmPassword) {
          setMatch(true);
          setLoading(true);

          try {
            const user = auth.currentUser;
            updatePassword(user, password);
            toast.success('Password changed');
            setLoading(false);
          } catch (error) {
            toast.error(error.message);
            setLoading(false);
          }
        } else {
          setMatch(false);
        }
      } else {
        setPassword(false);
        console.log('Field is empty');
      }
    }
  };
  const handleSaveWallet = (e) => {
    e.preventDefault();
    setTrySubmit(true);
    if (btcwallet || ethwallet !== '') {
      setLoad(true);
    } else {
      setLoad(false);
    }
  };
  return (
    <>
      <DashboardLayout>
        <StyledBox>
          <StyledH3>Profile</StyledH3>
          <hr />

          <StyledForm autoComplete="off">
            <div className="flex">
              <label>Username:</label>
              <input
                type="text"
                value={userName}
                className="username"
                disabled
              />
            </div>
            <div className="flex">
              <label>Email Address:</label>
              <input type="text" value={userEmail} disabled />
            </div>
          </StyledForm>
        </StyledBox>
        <br />
        <StyledBox>
          <StyledH3>Payout</StyledH3>
          <hr />

          <StyledForm onSubmit={handleSaveWallet} >
            <div className="flex">
              <label>BTC Wallet:</label>
              <input
                type="text"
                value={btcwallet}
                onChange={(e) => setBtcwallet(e.target.value)}
                className="username"
              />
            </div>
            <div className="flex">
              <label>ETH Wallet:</label>
              <input
                type="text"
                value={ethwallet}
                onChange={(e) => setEthwallet(e.target.value)}
              />
            </div>
           
          </StyledForm>
        </StyledBox>
        <br />
        <StyledBox>
          <StyledHP>Change Password</StyledHP>
          <hr />
          <StyledForm onSubmit={handleSubmit}>
            <div className="flex">
              <label>New Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                name="password"
                placeholder="New password"
              />
              {!password && trySubmit ? (
                <ErrorMessage error="Password should be at least 6 characters" />
              ) : (
                ''
              )}
            </div>
            <div className="flex">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                name="confirm-password"
                placeholder="Confirm password"
              />
              {!match && trySubmit ? (
                <ErrorMessage
                  error={
                    !confirmPassword
                      ? 'Field Required'
                      : 'Password does not match'
                  }
                />
              ) : (
                ''
              )}
            </div>
            {!loading ? (
              <StyledButton className="btn" type="submit">
                Change password
              </StyledButton>
            ) : (
              <StyledButton className="btn">
                <div className="loader"></div>
              </StyledButton>
            )}
          </StyledForm>
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

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .flex {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .username {
    text-transform: capitalize;
  }
  label {
    width: 40%;
    text-align: start;
  }

  input {
    background: rgb(14, 29, 44, 0.6);
    width: 100%;
    padding: 15px 10px;
    border: 2px solid #0472e2;
    border-radius: 8px;
    margin: 10px 0;
    color: #fff;

    &:focus {
      outline: none;
    }
  }
  .btn {
    width: 100%;
    margin: 20px 0;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1280px) {
    width: 60%;
  }
`;
export default Settings;

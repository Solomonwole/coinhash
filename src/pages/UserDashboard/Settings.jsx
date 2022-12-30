import DashboardLayout from '../../layout/DashboardLayout';
import { updateProfile } from 'firebase/auth';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase/FirebaseConfig';
import {
  StyledButton,
  StyledH3,
  StyledHP,
} from '../../components/Styles/Styled';
import ErrorMessage from '../../components/Error/ErrorMessage';
import { toast, ToastContainer } from 'react-toastify';

const Settings = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [trySubmit, setTrySubmit] = useState('');
  const [match, setMatch] = useState(false);
  const [loading, setLoading] = useState(false);
  const userName = localStorage.getItem('HashuserName');
  const userEmail = localStorage.getItem('HashuserEmail');

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
            updateProfile(auth.currentUser, { password: password});
            toast.success("Password changed")
            setLoading(false);
          } catch (error) {
            toast.error(error.message)
            setLoading(false);
          }
        }else{
          setMatch(false)
        }
      } else {
        setPassword(false);
        console.log("Field is empty");

      }
    }
  };
  return (
    <>
      <DashboardLayout>
        <StyledPage>
          <StyledH3>Profile</StyledH3>
          <br />

          <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <label>Username</label>
            <input type="text" value={userName} className="username" disabled />
            <label>Email Address</label>
            <input type="text" value={userEmail} disabled />
          </StyledForm>

          <br />

          <StyledHP>Change Password</StyledHP>
          <StyledForm onSubmit={handleSubmit}>
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

  .info {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: start;

    .first {
      width: 30%;
    }
  }
`;
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .username {
    text-transform: capitalize;
  }
  label {
    width: 100%;
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

import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import { StyledButton, StyledH2 } from '../Styles/Styled';
import ErrorMessage from '../Error/ErrorMessage';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);

  useEffect(() => {
    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrySubmit(true);

    if (email !== '') {
      setLoading(true);
      try {
        sendPasswordResetEmail(auth, email).then(() => {
          toast.success('Reset Link sent to email');
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          toast.error(err.code);
          console.log("Error Code", err.code);
        });
      } catch (error) {
        setLoading(false);
        toast.error(error.code);
        // console.log("Error Code", error.code);
      }
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      <StyledSign>
        <StyledH2>Reset Password</StyledH2>

        <StyledForm onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            name="email"
            placeholder="Email address"
          />
          {!valid && trySubmit ? (
            <ErrorMessage error={!email ? 'Field Required' : 'Invalid Email'} />
          ) : (
            ''
          )}
          {!loading ? (
            <StyledButton className="btn" type="submit">
              Login
            </StyledButton>
          ) : (
            <StyledButton className="btn">
              <div className="loader"></div>
            </StyledButton>
          )}
        </StyledForm>
      </StyledSign>
      <ToastContainer />
    </>
  );
};

// Styling

const StyledSign = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login {
    color: #0472e2;
  }
`;

const StyledForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

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

  .check {
    display: flex;
    width: 82%;

    .agree {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      margin-left: 10px;
    }
  }

  .btn {
    width: 100%;
    margin: 20px 0;
  }
  .reset {
    display: flex;
    justify-content: flex-end;
    align-items: end;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1280px) {
    width: 60%;
  }
`;
export default ResetPassword;

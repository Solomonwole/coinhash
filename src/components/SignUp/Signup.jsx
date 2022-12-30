// import { toast } from "react-toastify";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledButton, StyledH2, StyledHP } from '../Styles/Styled';
import nofill from '../../assets/Signup/check.svg';
import filled from '../../assets/Signup/check_filled.svg';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ErrorMessage from '../Error/ErrorMessage';
import { auth } from '../../firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

const SignupComponent = () => {
  const [check, setCheck] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [trySubmit, setTrySubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const [match, setMatch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (password === confirmPassword) {
      setMatch(true);
    }
    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [email, confirmPassword, password]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClick = () => {
    setCheck(!check);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrySubmit(true);

    if (username && email && password && confirmPassword !== null) {
      if (valid === true) {
        if (password.length > 6) {
          if (password === confirmPassword) {
            setMatch(true);
            if (check === true) {
              setLoading(true);

              try {
                await createUserWithEmailAndPassword(
                  auth,
                  email,
                  password
                ).then((userCredential) => {
                  updateProfile(auth.currentUser, { displayName: username });
                  toast.success('Account successfully created');

                  setLoading(false);
                });
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setCheck(false);
                setTrySubmit(false);
              } catch (err) {
                console.log(err);
                setLoading(false);
                toast.error(err.message);
              }
            } else {
              console.log('Agree to terms and conditions');
            }
          } else {
            setMatch(false);
            console.log('Password does not match');
          }
        } else {
          setPassword(false);
          console.log('Password should be at least 6 characters');
        }
      } else {
        setValid(false);
        console.log('invalid Email');
      }
    } else {
      console.log('Filed is Required');
    }
  };

  return (
    <>
      <StyledSign>
        <StyledH2>Create an account</StyledH2>

        <StyledForm onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            name="username"
            placeholder="Username"
            className='username'
          />
          {!username && trySubmit ? (
            <ErrorMessage error="Field Required" />
          ) : (
            ''
          )}
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
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            name="password"
            placeholder="Password"
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
                !confirmPassword ? 'Field Required' : 'Password does not match'
              }
            />
          ) : (
            ''
          )}
          <div className="check">
            <img src={!check ? nofill : filled} alt="" onClick={handleClick} />
            <StyledHP className="agree">
              By signing up, I agree to company terms and condition and privacy
              policy .
            </StyledHP>
          </div>
          {!check && trySubmit ? (
            <ErrorMessage error="Agree to terms and conditions" />
          ) : (
            ''
          )}
          {!loading ? (
            <StyledButton className="btn" type="submit">
              Create account
            </StyledButton>
          ) : (
            <StyledButton className="btn">
              <div className="loader"></div>
            </StyledButton>
          )}
        </StyledForm>
        <StyledHP>
          Already have an account?{' '}
          <Link to="/login" className="login">
            Login
          </Link>
        </StyledHP>
      </StyledSign>
      <ToastContainer />
    </>
  );
};

// Styling

const StyledSign = styled.div`
  margin-top: 150px;
  margin-bottom: 20px;
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
  justify-content: flex-start;
  text-align: start;
  align-items: center;
  width: 100%;

  .username{
    text-transform:capitalize;
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

  .check {
    display: flex;
    width: 100%;
    margin-bottom: 15px;

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
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1280px) {
    width: 60%;
  }
`;

export default SignupComponent;

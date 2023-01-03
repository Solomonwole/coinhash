import styled from 'styled-components';
import { StyledButton, StyledH2, StyledHP } from '../Styles/Styled';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorMessage from '../Error/ErrorMessage';
import { toast, ToastContainer } from 'react-toastify';
import { auth, db } from '../../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

const LoinComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrySubmit(true);

    if (email && password !== '') {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
              const userEmail = user.email;

              localStorage.setItem('HashuserEmail', userEmail);

              const displayName = auth.currentUser.displayName;
              localStorage.setItem('HashuserName', displayName);
              const userUID = auth.currentUser.uid;
              localStorage.setItem('HashuserUID', userUID);

              try {
                const documentSnapshot = doc(db, 'users', userUID).get();
              console.log(documentSnapshot.data());

              } catch (error) {
                console.log(error);
              }
              // try {
              //   const docRef = doc(db, 'users', userUID);
              //   const docSnap = getDoc(docRef);

              //   if (docSnap) {
              //     console.log('Document data:', docSnap);
              //   } else {
              //     console.log('No such document!');
              //   }
              // } catch (error) {
              //   console.log('Error', error);
              // }

              navigate('/dashboard');
              setLoading(false);
            } else {
              navigate('/email-verification');
              setLoading(false);
            }
          }
        );
      } catch (error) {
        toast.error(error.code);
        setLoading(false);
      }
    } else {
      console.log('Field is required');
      setLoading(false);
    }
  };
  return (
    <>
      <StyledSign>
        <StyledH2>Welcome Back!</StyledH2>

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

          <div className="reset">
            <Link to="/forgot-password">
              <StyledHP>Forgot Password?</StyledHP>
            </Link>
          </div>

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
        <StyledHP>
          Don't have an account?{' '}
          <Link to="/signup" className="login">
            Sign up
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
  width: 100%;

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
export default LoinComponent;

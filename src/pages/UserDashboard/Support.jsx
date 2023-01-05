import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { StyledButton, StyledH3 } from '../../components/Styles/Styled';
import DashboardLayout from '../../layout/DashboardLayout';

function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const username = localStorage.getItem('HashuserName');
  const email = localStorage.getItem('HashuserEmail');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === '') {
      setSubmit(false);
    } else {
      setSubmit(true);
      toast.success('Message sent successfully');
      setSubmit(false);
      setMessage('');
    }
  };
  return (
    <DashboardLayout>
      <StyledBox>
        <StyledH3>Support</StyledH3>
        <hr />
        <StyledContact>
          <StyledH3 className="width">Send us a Message</StyledH3>

          <StyledForm onSubmit={handleSubmit}>
            <input
              type="text"
              name="FullName"
              placeholder="Enter Name"
              value={username}
            />
            <input
              type="email"
              name="FullName"
              placeholder="Enter Email"
              value={email}
            />
            <textarea
              placeholder="Enter message"
              name="message"
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {!submit ? (
              <StyledButton className="btn" type="submit">
                Send Message
              </StyledButton>
            ) : (
              <StyledButton className="btn" type="submit">
                <div className="loader"></div>
              </StyledButton>
            )}
          </StyledForm>
        </StyledContact>
      </StyledBox>
      <ToastContainer />
    </DashboardLayout>
  );
}
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
// Styling

const StyledContact = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .timg {
    margin-bottom: 15px;
  }
  .width {
    width: 60%;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  input {
    border-radius: 8px;
    border: 2px solid #0472e2;
    background: rgb(14, 29, 44, 0.6);
    padding: 10px;
    color: #fff;
    width: 100%;
    height: 58px;
    margin-bottom: 15px;

    &:focus {
      outline: none;
    }
  }
  textarea {
    border-radius: 8px;
    border: 2px solid #0472e2;
    background: rgb(14, 29, 44, 0.6);
    padding: 10px;
    color: #fff;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 30px;

    &:focus {
      outline: none;
    }
  }
  .btn {
    width: 100%;
  }
`;
export default Support;

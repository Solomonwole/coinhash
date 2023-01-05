import styled from "styled-components";
import { StyledButton, StyledH3 } from "../Styles/Styled";
import contact from "../../assets/Home/contact.svg";
import { useState } from "react"

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <>
      <StyledContact>
        <img src={contact} alt="" className="timg" />
        <StyledH3 className="width">Send us a Message</StyledH3>

        <StyledForm onSubmit={handleSubmit}>
          <input type="text" name="FullName" placeholder="Enter full name"/>
          <textarea placeholder="Enter message" name="message" rows="8"></textarea>
        {!submit ? <StyledButton type="submit">Send Message</StyledButton> : <StyledButton><div className="loader"></div></StyledButton>  }
        </StyledForm>
      </StyledContact>
    </>
  );
};

// Styling

const StyledContact = styled.div`
  margin-top: 100px;
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
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px){
    width: 60%;
  }
  input {
    border-radius: 8px;
    border: 2px solid #0472e2;
    background: rgb(14,29,44, 0.6);
    padding: 10px;
    color: #fff;
    width: 100%;
    height: 58px;
    margin-bottom: 15px;
    margin-top: 30px;

    &:focus {
      outline: none;
    }
  }
  textarea {
    border-radius: 8px;
    border: 2px solid #0472e2;
    background: rgb(14,29,44, 0.6);
    padding: 10px;
    color: #fff;
    width: 100%;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 30px;

    &:focus {
      outline: none;
    }
  }
`;
export default Contact;

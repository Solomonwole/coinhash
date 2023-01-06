import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../../components/Other/HeaderNav';
import { StyledButton } from '../../components/Styles/Styled';
import { PageLayout } from '../../layout/PageLayout';
import err from '../../assets/err.png';
import { Link } from 'react-router-dom';

function redirect() {
  return (
    <PageLayout>
      <HeaderNav />
      <StyledPage>
        <img src={err} alt="" />
        <Link to="/">
          <StyledButton className="btn">Home</StyledButton>
        </Link>
      </StyledPage>
    </PageLayout>
  );
}
const StyledPage = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
  }

  .btn {
    background: #0abf8e;
  }
`;
export default redirect;

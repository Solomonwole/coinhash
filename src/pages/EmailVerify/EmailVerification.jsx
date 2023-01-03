import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../../components/Other/HeaderNav';
import { StyledH3 } from '../../components/Styles/Styled';
import { PageLayout } from '../../layout/PageLayout';
import { MdOutlineMarkEmailUnread } from "react-icons/md"

function EmailVerification() {
  
  return (
    <>
      <PageLayout>
        <HeaderNav />
        <StyledHero>
            <MdOutlineMarkEmailUnread className='icon'/>
          <StyledH3 className='align'>Check email for verification link</StyledH3>
        </StyledHero>
      </PageLayout>
    </>
  );
}

// Styling

const StyledHero = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon{
    font-size: 200px;
  }

  .align{
    text-align: center;
  }
`;
export default EmailVerification;

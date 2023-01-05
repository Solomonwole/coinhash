import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo_d.svg';
import { Link } from 'react-router-dom';
import { StyledHP } from '../Styles/Styled';
import MobileMenuDashboard from './Menu';

const WebNav = () => {
    useEffect(()=>{},[])
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(true);
  };

//   const userName = localStorage.getItem(userName)
  return (
    <>
      <StyledWebAppNav>
        <LogoContainer>
          <div>
            <FiMenu onClick={handleMenu} className="menu-icon"/>
          </div>
          <div>
            <Link to="/">
              <img src={logo} id="site-logo" alt="" className="logo" />
            </Link>
          </div>
        </LogoContainer>
       <StyledHP> Hi, Solomon</StyledHP>
      </StyledWebAppNav>
      <MobileMenuDashboard menu={menu} closeMenu={() => setMenu(false)}/>
      

    </>
  );
};

// Styling

export const StyledWebAppNav = styled.nav`
  grid-area: nav;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4rem 5px 0;
  

  @media (max-width: 520px) {
    width: 100vw;
  }

  @media (max-width: 1140px) {
    border-bottom: 1px solid #d2d3d4;
    padding: 16px 19px;
    margin-bottom: 16px;
    position: fixed;
    z-index: 10;
    background: #001020;
    display: block;
    width: 100vw;

    #site-logo {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
    }

    h3,
    p {
      display: none;
    }
  }

  @media (max-width: 820px) {
    padding-left: 12px;
    padding-right: 12px;
  }
  h3 {
    font-family: Lato;
    font-size: 22px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: #2b2c34;
    margin-left: 3rem;
  }
  p {
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #2b2c34;
  }
`;

export const LogoContainer = styled.div`
  visibility: hidden;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  .lgr {
    width: 20%;
  }
  div {
    width: 50%;

    &:nth-of-type(1) {
      img {
        width: 38px;
        height: 38px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1140px) {
    display: flex;
    visibility: visible;
    .logo {
      width: 130px;
    }
    .menu-icon{
    }
  }
`;

export default WebNav;

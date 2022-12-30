import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LogoD from '../../assets/logo_d.svg';
import LogoM from '../../assets/logo_m.svg';
import { FiMenu } from 'react-icons/fi';
import MobileMenu from './Menu';
import { StyledButton } from '../Styles/Styled';
import { auth } from '../../firebase/FirebaseConfig';

const HeaderNav = ({ userEmail }) => {
  const [menu, setMenu] = useState(false);
  const [logged, setLogged] = useState(false);
  const currentUser = auth;

  useEffect(() => {
    userEmail !== null ? setLogged(true) : setLogged(false);
    if (currentUser) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [userEmail, currentUser]);

  const handleMenu = () => {
    setMenu(true);
  };

  return (
    <>
      <StyledHeader>
        <div className="head-content">
          <div className="logo">
            <Link to="/">
              {' '}
              <img src={LogoD} alt="" className="desktop" />
            </Link>
            <Link to="/">
              {' '}
              <img src={LogoM} alt="" className="mobile" />
            </Link>
          </div>
          <div>
            <div className="desktop-nav">
              <ul>
                <li>
                  <HashLink to="/#how-it-works">How it works</HashLink>
                </li>
                <li>
                  <HashLink to="/#pricing">Pricing</HashLink>
                </li>
                <li>
                  <HashLink to="/#faq">FAQ</HashLink>
                </li>
              </ul>
              <div className="btnauth">
                {!logged ? (
                  <Link to="/dashboard">
                    <StyledButton>Dashboard</StyledButton>
                  </Link>
                ) : (
                  <>
                    <Link to="/login">
                      <StyledButton outline className="log">
                        Login
                      </StyledButton>
                    </Link>
                    <Link to="/signup">
                      <StyledButton>Signup</StyledButton>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="mobile-nav">
              <FiMenu onClick={handleMenu} />
            </div>
          </div>
        </div>
      </StyledHeader>
      <MobileMenu menu={menu} closeMenu={() => setMenu(false)} />
    </>
  );
};

// Styling
const StyledHeader = styled.div`
  background: #001020;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;

  .head-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
    padding: 10px 0;

    max-width: 1024px;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
      margin: 0 20px;
    }
  }

  .desktop {
    display: none;
    @media screen and (min-width: 929px) {
      display: block;
    }
  }
  .mobile {
    @media screen and (min-width: 929px) {
      display: none;
    }
  }
  .desktop-nav {
    display: none;
    @media screen and (min-width: 721px) {
      display: flex;
      justify-content: space-between;

      .btnauth .log {
        margin: 0 15px;
      }
      ul {
        display: flex;
        align-items: center;
      }
      li {
        list-style: none;
        margin: 0 10px;
      }
    }
  }
  .mobile-nav {
    font-size: 1.7rem;
    cursor: pointer;

    @media screen and (min-width: 721px) {
      display: none;
    }
  }
`;

export default HeaderNav;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import '../Styles/new.css';
import '../Styles/menu.css';
import LogoM from '../../assets/logo_m.svg';
import { MdSpaceDashboard } from 'react-icons/md';
import { BiLogOut, BiSupport } from 'react-icons/bi';
import { auth } from '../../firebase/FirebaseConfig';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GiFireAxe, GiWallet } from 'react-icons/gi';
import { FiSettings } from 'react-icons/fi';

const MobileMenuDashboard = ({ menu, closeMenu }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = menu ? 'hidden' : 'auto';
  }, [menu]);

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('HashuserEmail');
    localStorage.removeItem('HashuserName');
  };

  if (!menu) {
    return null;
  }
 

  return (
    <>
      <StyledOverlay>
        <StyledMenuDrawer className={menu ? 'slideInLeft' : 'slideOutLeft'}>
          <StyledHeading>
            <Link to="/">
              <img src={LogoM} alt="" className="mobile" />
            </Link>
            <AiOutlineClose className="icon" onClick={closeMenu} />
          </StyledHeading>
          <StyledMenuList>
            <ul>
            <li>
              <NavLink to="/dashboard" onClick={closeMenu}>
                <MdSpaceDashboard className="icon"/>
                Dashboard
              </NavLink >
            </li>
            <li>
              <NavLink to="/hashrate" onClick={closeMenu}>
                <RiShoppingCartLine className="icon"/>
                Buy hashrate
              </NavLink>
            </li>
            <li>
              <NavLink to="/workers" onClick={closeMenu}>
                <GiFireAxe className="icon"/>
                Workers
              </NavLink>
            </li>
            <li>
              <NavLink to="/withdraw" onClick={closeMenu}>
                <GiWallet className="icon"/>
                Withdraw
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" onClick={closeMenu}>
                <FiSettings className="icon"/>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" onClick={closeMenu}>
                <BiSupport className="icon"/>
                Support
              </NavLink>
            </li>
             
              <li>
                <Link to="/login" onClick={handleLogout}>
                  <BiLogOut className='icon'/>
                  Signout
                </Link>
              </li>
            </ul>
          </StyledMenuList>
        </StyledMenuDrawer>
      </StyledOverlay>
    </>
  );
};

// Styling

const StyledOverlay = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 22, 34, 0.7);
  top: 0;
  left: 0;
  overflow: hidden;
`;
const StyledMenuDrawer = styled.div`
  background: #001020;
  width: 75%;
  height: 100vh;
  padding: 16px 20px;
  z-index: 50;
`;
const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  .icon {
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: #54a2f7;
    }
  }
`;
const StyledMenuList = styled.div`
width: 100%;
margin: 30px auto;
text-align: center;

ul {
    list-style: none;

    li{
        margin: 20px 0;
        padding: 10px;
        &:hover{
            background: #0AC389;
            color: #000;
        }
        
    }
    a{
        background: transparent;
        color: #fff;
        padding: 0 10%;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: start;
        &:hover{
            background: transparent;
        }
}
.icon{
  margin-right: 15px;
}

`;
export default MobileMenuDashboard;

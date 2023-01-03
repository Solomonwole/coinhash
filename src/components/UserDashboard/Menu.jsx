import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import '../Styles/new.css';
import '../Styles/menu.css';
import LogoM from '../../assets/logo_m.svg';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';
import { BiLogOut } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/FirebaseConfig';

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
  const handlelow = () => {
    toast.error('Low wallet balance', {
      autoClose: 1000,
    });

    closeMenu();
  };
 
 

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
                <Link to="/dashboard" onClick={closeMenu} >
                  <MdSpaceDashboard className='iconicon'/>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={closeMenu}>
                  <BsFillCreditCardFill className='iconicon'/>
                  Deposit
                </Link>
              </li>
              <li>
                <HashLink onClick={handlelow}>
                  <FaWallet className='iconicon'/>
                  Withdraw
                </HashLink>
              </li>
              <li>
                <Link to="/settings" onClick={closeMenu}>
                  <GoSettings className='iconicon'/>
                  Settings
                </Link>
              </li>
              <li>
                <Link onClick={handleLogout}>
                  <BiLogOut className='iconicon'/>
                  Logout
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
.iconicon{
  margin-right: 15px;
}

`;
export default MobileMenuDashboard;

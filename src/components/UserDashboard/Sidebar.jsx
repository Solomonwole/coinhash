import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GiWallet } from 'react-icons/gi';
import { GiFireAxe } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { BiLogOut } from 'react-icons/bi';
import LogoD from '../../assets/logo_d.svg';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/FirebaseConfig';

const Sidebar = (props) => {
  const navigate = useNavigate()
;  const handlelow = () => {
    toast.error('Low wallet balance', {
      autoClose: 1000,
    });
  };

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('HashuserEmail');
    localStorage.removeItem('HashuserName');
    navigate("/login")
  };
  return (
    <>
      <StyledSidebar>
        <StyledTop>

        <div >
            <Link to="/"><img src={LogoD} alt="" className="logo"/></Link>
          </div>

          <div className="menu">
          <ul>
            <li>
              <NavLink to="/dashboard">
                <MdSpaceDashboard className="icon"/>
                Dashboard
              </NavLink >
            </li>
            <li>
              <NavLink to="/hashrate">
                <RiShoppingCartLine className="icon"/>
                Buy hashrate
              </NavLink>
            </li>
            <li>
              <NavLink to="/workers">
                <GiFireAxe className="icon"/>
                Workers
              </NavLink>
            </li>
            <li>
              <NavLink to="/withdraw" onClick={handlelow}>
                <GiWallet className="icon"/>
                Withdraw
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings">
                <FiSettings className="icon"/>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/support">
                <BiSupport className="icon"/>
                Support
              </NavLink>
            </li>
          </ul>
          </div>
         
        </StyledTop>

        <StyledBottom>
          <div className="logout" onClick={handleLogout}>
            <BiLogOut className="icon" /> Sign out
          </div>
        </StyledBottom>
      </StyledSidebar>
    </>
  );
};

// Styling

export const StyledSidebar = styled.aside`
  z-index: 3;
  grid-area: sidebar;
  padding: 22px 22px;
  background-color: #011c37;
  width: 217px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  // display: grid;
  // grid-template-rows: 5% 95%;
  // gap: 64px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;


  @media (max-width: 1140px) {
    transform: translateX(-100%);
    transition: transform 1s ease;

    & > div > img:first-child {
      display: block;
    }
  }

  &.open {
    transform: translateX(0);
    transition: transform 1s ease;
  }
`;

const StyledTop = styled.div`
  .logo {
    width: 150px;
    margin-bottom: 40px;
  }

  .menu {
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      color: #fff;
      padding: 10px 14px;
      opacity: 0.6;
    }

    a:hover {
      padding: 10px 14px;
      color: #fff;     
      opacity: 1;  
    }
    a.active {
      background: #0AC389;
      padding: 10px 14px;
      border-radius: 8px;
      color: #fff;  
      opacity: 1;     
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        margin: 20px 0;
        align-items: center;
        font-size: 16px;
        // padding: 15px 14px;
        .icon {
          font-size: 23px;
          margin-right: 8px;
        }
      }
    }
  }
`;
const StyledBottom = styled.div`
  .logout {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    cursor: pointer;
    opacity: 0.6;
    .icon {
      font-size: 29px;
      margin-right: 8px;
    }

    &:hover{
      background: #c10000;
      padding: 10px 14px;
      border-radius: 8px;
      color: #fff;  
      opacity: 1;
    }
  }
`;

export default Sidebar;

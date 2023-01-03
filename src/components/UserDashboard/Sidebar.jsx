import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';
import { BiLogOut } from 'react-icons/bi';
import LogoD from '../../assets/logo_d.svg';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/FirebaseConfig';

const Sidebar = (props) => {
  const handlelow = () => {
    toast.error('Low wallet balance', {
      autoClose: 1000,
    });
  };

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('HashuserEmail');
    localStorage.removeItem('HashuserName');
  };
  return (
    <>
      <StyledSidebar>
        <div>
          <Link to="/dashboard">
            <img src={LogoD} alt="" className="logo-img" />
          </Link>
        </div>

        <section>
          <ul>
            <li>
              <Link to="/dashboard">
                <MdSpaceDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <HashLink to="/#">
                <BsFillCreditCardFill />
                Deposit
              </HashLink>
            </li>
            <li>
              <HashLink onClick={handlelow}>
                <FaWallet />
                Withdraw
              </HashLink>
            </li>
            <li>
              <Link to="/settings">
                <GoSettings />
                Settings
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link onClick={handleLogout}>
                <BiLogOut />
                Logout
              </Link>
            </li>
          </ul>
        </section>
      </StyledSidebar>
    </>
  );
};

// Styling

export const StyledSidebar = styled.aside`
  z-index: 3;
  grid-area: sidebar;
  padding: 32px 135px 32px 64px;
  background-color: #011c37;
  max-width: 280px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  /* bottom: 0; */
  box-shadow: 2px 2px 8px rgba(120, 122, 125, 0.15);

  display: grid;
  grid-template-rows: 5% 95%;
  gap: 64px;

  div {
    margin-left: -80px;
    .logo-img {
      width: 230px;
    }
  }

  section {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 37px;
  }

  li {
    margin-left: -2rem;
    list-style: none;

    .active,
    a:hover {
      color: #54a2f7;

      svg {
        fill: #54a2f7;
        stroke: #54a2f7;
      }

      &::before {
        content: '';
        position: absolute;
        left: -3rem;
        width: 4px;
        height: 24px;
        background: #54a2f7;
        border-radius: 4px;
      }
    }

    .active,
    a:hover {
      .requests {
        color: #54a2f7;
        svg {
          fill: #54a2f7;
          stroke: none;
          * {
            fill: #54a2f7 !important;
          }
        }
      }
    }
  }

  a,
  button {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 600;
    color: #a5a6ab;
    line-height: 24px;
    font-size: 16px;
    margin-left: 2rem;
    position: relative;
  }

  a svg {
    fill: #a5a6a8;
    stroke: #a5a6a8;
  }

  & > div > img:first-child {
    display: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .logo {
    width: 10px;
  }

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

export default Sidebar;

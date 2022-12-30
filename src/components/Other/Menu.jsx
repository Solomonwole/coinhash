import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import "../Styles/new.css";
import "../Styles/menu.css";
import LogoM from "../../assets/logo_m.svg";

const MobileMenu = ({ menu, closeMenu }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = menu ? "hidden" : "auto";
  }, [menu]);

  if (!menu) {
    return null;
  }

  return (
    <>
      <StyledOverlay>
        <StyledMenuDrawer className={menu ? "slideInLeft" : "slideOutLeft"}>
          <StyledHeading>
            <Link to="/">
              <img src={LogoM} alt="" className="mobile" />
            </Link>
            <AiOutlineClose className="icon" onClick={closeMenu} />
          </StyledHeading>
          <StyledMenuList>
            <ul>
              <li>
                <HashLink to="/#how-it-works" onClick={closeMenu}>
                  How it works
                </HashLink>
              </li>
              <li>
                <HashLink to="/#pricing" onClick={closeMenu}>
                  Pricing
                </HashLink>
              </li>
              <li>
                <HashLink to="/#faq" onClick={closeMenu}>
                  FAQ
                </HashLink>
              </li>
              <li>
                <Link to="/login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={closeMenu}>
                  Signup
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
        &:hover{
            background: transparent;
        }
}

`;
export default MobileMenu;

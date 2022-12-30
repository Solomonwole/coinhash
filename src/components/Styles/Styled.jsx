import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 46px;
  line-height: 49px;
`;
export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 35px;
  line-height: 44px;
  text-align: center;
`;
export const StyledH3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`;
export const StyledHP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: ${(props) => props.end ? "end" : ""};
  margin-bottom: ${(props) => props.end ? "20px" : ""};
  text-transform: ${(props) => props.end ? "capitalize" : ""};
  @media screen and (max-width: 1140px){
    margin-top: ${(props) => props.end ? "30px" : ""};}
  
`;

// Button Style

export const StyledButton = styled.button`
  background: ${(props)=> props.outline ? "transparent" : "linear-gradient(90deg, #0ac389 0%, #0472e2 100%)"};
  border-radius: 8px;
  border: ${(props) => props.outline ? "2px solid #0472e2" : "none"};
  width: 160px;
  height: 55px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
`;

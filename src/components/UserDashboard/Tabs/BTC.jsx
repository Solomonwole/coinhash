import React from 'react';
import styled from 'styled-components';
import { StyledH3, StyledHP } from '../../Styles/Styled';
import { SlSpeedometer } from 'react-icons/sl';
import { GiFireAxe } from 'react-icons/gi';
import { MdErrorOutline } from 'react-icons/md';
import { FaBoxes } from 'react-icons/fa';

function BTC() {
  const username = localStorage.getItem('HashuserName');
  const email = localStorage.getItem('HashuserEmail');
  return (
    <>
      <StyledPage>
        <StyledContent>
          <div className="top">
            <StyledBox>
              <div className="icon">
                <SlSpeedometer />
              </div>
              <div className="row">
                <StyledH3>0 TH/s</StyledH3>
                <StyledHP>Current hashrate (BTC)</StyledHP>
              </div>
            </StyledBox>

            <StyledBox>
              <div className="icon">
                <GiFireAxe />
              </div>
              <div className="row">
                <StyledH3>0 active, 0 offline</StyledH3>
                <StyledHP>My workers (BTC)</StyledHP>
              </div>
            </StyledBox>
          </div>
          <Space />
          <StyledBoxRev>
            <div className="header">
              <StyledHP>My revenue (BTC)</StyledHP>
              <div className="date">
                <StyledHP>Date range:</StyledHP>
              </div>
            </div>
            <hr />
          </StyledBoxRev>
          <Space />
          <div className="top">
            <StyledBoxes>
              <SlSpeedometer className="icon" />
              <StyledH3>$0.00</StyledH3>
              <StyledHP>Wallet Balance (BTC)</StyledHP>
            </StyledBoxes>
            <StyledBoxes>
              <MdErrorOutline className="icon" />
              {/* <StyledH3>65444.90 TH/s</StyledH3> */}
              <StyledHP>
                You have not yet accrued,
                <br /> it is impossible to display the yield
              </StyledHP>
            </StyledBoxes>
          </div>
        </StyledContent>

        {/* -----  */}

        <StyledSide>
          <StyledBoxSide>
            <div className="icon">
              <FaBoxes />
            </div>
            <div className="row">
              <StyledH3>580 438</StyledH3>
              <StyledHP>Last mined block</StyledHP>
            </div>
          </StyledBoxSide>
          <Space />
          <StyledBox2Side>
            <StyledH3>Start mining</StyledH3>
            <hr />
            <Space />
            <div className="flex">
              <p>User: {username}</p>
              <br />
              <p>Email: {email}</p>
              <br />
              <p>Total hashrate: 0</p>
              <br />
              <p>Wallet balance: $0.00</p>
              <br />
            </div>
          </StyledBox2Side>
        </StyledSide>
      </StyledPage>
      <Space />
    </>
  );
}

// styling

const Space = styled.div`
  margin: 20px 0;
`;

const StyledPage = styled.div`
display: flex;
justify-content: space-between:

`;
const StyledContent = styled.div`
  width: 70%;

  .top{
    display: flex;
    justify-content: space-between:
    align-items: center;
    width: 100%; 
  }
`;
const StyledSide = styled.div`
  width: 30%;
`;
const StyledBoxes = styled.div`
  width: 50%;
  height: 250px;
  margin-right: 20px;
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 35px;
    margin-bottom: 15px;
  }
`;
const StyledBoxRev = styled.div`
  margin-top: 50px;
  width: 97%;
  height: 350px;
  margin-right: 20px;
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  hr{
    margin: 20px 0;
  }
`;
const StyledBox = styled.div`
  width: 50%;
  margin-right: 20px;
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    font-size: 35px;
    margin-right: 15px;
  }
`;

// Side styling

const StyledBoxSide = styled.div`
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    font-size: 35px;
    margin-right: 15px;
  }
`;

const StyledBox2Side = styled.div`
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 50px;
  hr{
    margin: 10px 0;
  }
`;

export default BTC;

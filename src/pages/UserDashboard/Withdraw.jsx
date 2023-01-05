import React, { useEffect } from 'react';
import styled from 'styled-components';
import DashboardLayout from '../../layout/DashboardLayout';
import { toast, ToastContainer } from 'react-toastify';
import {
  StyledButton,
  StyledH3,
  StyledHP,
} from '../../components/Styles/Styled';
import { FaSort } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';

function Withdraw() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DashboardLayout>
      <StyledBoxtop>
        <div className="header">
          <StyledH3>My balance</StyledH3>
          <hr />
        </div>
        <div className="balance">
          <div className="box">
            <StyledHP>BTC</StyledHP>
            <StyledH3>$0.00</StyledH3>
          </div>
          <div className="box">
            <StyledHP>ETH</StyledHP>
            <StyledH3>$0.00</StyledH3>
          </div>
        </div>
        <div className="btndiv">
          <StyledButton
            className="btn"
            onClick={() => toast.error('Low wallet balance')}
          >
            Withdraw
          </StyledButton>
        </div>
      </StyledBoxtop>
      <StyledBox>
        <div className="header">
          <StyledH3>Transactions</StyledH3>
          <hr />
        </div>
        <div className="table-head">
          <StyledHP className="tables">
            <FaSort /> WALLET ADDRESS
          </StyledHP>
          <StyledHP className="tables">
            <FaSort /> TRANSACTION HASH
          </StyledHP>
          <StyledHP className="tables">
            <FaSort /> DATE
          </StyledHP>
          <StyledHP className="tables">
            <FaSort /> AMOUNT
          </StyledHP>
          <StyledHP className="tables">
            <FaSort /> STATUS
          </StyledHP>
        </div>

        <div className="error">
          <StyledHP>
            <MdErrorOutline className="icon" />
            No data
          </StyledHP>
        </div>
      </StyledBox>
      <ToastContainer />
    </DashboardLayout>
  );
}
// styling

const StyledBoxtop = styled.div`
  width: 100%;
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 50px;
  margin-top: 50px;

  hr {
    margin: 20px 0;
  }

  .balance {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .box {
      width: 48%;
      height: 120px;
      background: #001020;
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .btndiv {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    .btn {
      background: #0ac389;
    }
  }
`;
const StyledBox = styled.div`
  width: 100%;
  height: 90vh;
  background: #011c37;
  padding: 10px 15px;
  border-radius: 8px;

  hr {
    margin: 20px 0;
  }

  .table-head {
    display: flex;
    justify-content: space-between;
    background: #0ac389;
    padding: 5px;

    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media screen and (max-width: 884px) {
      padding: 15px;
      .tables {
        min-width: 200px;
      }
    }
  }

  .error {
    margin-top: 20px;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 5px;
      margin-bottom: -4px;
      font-size: 20px;
    }
  }
`;
export default Withdraw;

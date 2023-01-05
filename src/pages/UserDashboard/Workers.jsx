import React, { useEffect } from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import styled from 'styled-components';
import { StyledH3, StyledHP } from '../../components/Styles/Styled';
import { FaSort } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';

function Workers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DashboardLayout>
      <StyledBox>
        <div className="header">
          <StyledH3>Workers</StyledH3>
          <hr />
        </div>

        <div className="table-head">
          <StyledHP className='tables'>
            <FaSort /> WORKER NAME
          </StyledHP>
          <StyledHP className='tables'>
            <FaSort /> AVG.HASHRATE/24H
          </StyledHP>
          <StyledHP className='tables'>
            <FaSort /> CURRENT
          </StyledHP>
          <StyledHP className='tables'>
            <FaSort /> STATUS
          </StyledHP>
          <StyledHP className='tables'>
            <FaSort /> LAST SUBMIT
          </StyledHP>
          <StyledHP className='tables'>
            <FaSort /> SHARDS VALID/INVALID
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

const StyledBox = styled.div`
  margin: 50px 0;
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

    @media screen and (max-width: 884px){
        padding: 15px;
        .tables{
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
export default Workers;

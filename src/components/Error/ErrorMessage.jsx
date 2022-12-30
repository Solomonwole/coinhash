import { BiErrorCircle } from "react-icons/bi";
import styled from "styled-components";

const ErrorMessage = ({ error }) => {
  return (
    <>
      <StyledError>
        <BiErrorCircle className="icon"/>
        <span>{error}</span>
      </StyledError>
    </>
  );
};

const StyledError = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 8px;
margin-top: -15px;
margin-bottom: 10px;
width: 100%;

.icon{
    margin-right: 8px;
    color: #FF0000;
}

span{
    color: #FF0000;
    font-weight: 200;
    font-size: 14px;
    margin-top: -1px;
}
`

export default ErrorMessage;

import PricingTemplate from "../../../template/PricingTemp";
import { useState } from "react";
import ethData from "../../../Data/dataeth";
import styled from "styled-components";

const ETHTab = () => {
  const [price] = useState(ethData);
  return (
    <>
      <StyledP>
        <PricingTemplate prices={price} />
      </StyledP>
    </>
  );
};

// Styling

const StyledP = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }
`;
export default ETHTab;

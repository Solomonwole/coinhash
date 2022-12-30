import PricingTemplate from "../../../template/PricingTemp";
import { useState } from "react";
import btcData from "../../../Data/data";
import styled from "styled-components";

const BTCTab = () => {
  const [price] = useState(btcData);
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
export default BTCTab;

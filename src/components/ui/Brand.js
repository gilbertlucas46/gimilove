import React from 'react'
import styled from "styled-components";

import Logo from "../../images/GiMiLove-white.svg";

const Brand = () => {
  return (
    <BrandContainer>
      <Logo/>
    </BrandContainer>
  )
}

export default Brand

const BrandContainer = styled.div`
  svg {
    height: 66px;
  }
`;

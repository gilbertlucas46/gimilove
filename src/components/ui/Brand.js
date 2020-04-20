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
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 66px;
  }
`;

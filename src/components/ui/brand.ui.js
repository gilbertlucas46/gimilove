import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "../../images/GiMiLove-white.svg";

const Brand = () => {
  return (
    <BrandContainer>
      <Link
          to="/"
          alt="GimiLove Logo"
          aria-label="links to home page"
        >
          <Logo/>
        </Link>
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
  a {
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
  }
  svg {
    height: 66px;
  }
  @media (max-width: 767px) {
    justify-content: end;
    padding-left: 1em;
    svg {
      height: 42px;
    }
  }
`;

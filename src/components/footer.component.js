import React from 'react'
import styled from 'styled-components'

import Wrapper from './wrapper.component'
import Flower from '../images/flower.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'

const FooterContainer = styled.footer`
  background-color:#2B2B28;
  h4 {
    color: white;
    text-align: center;
    font-size: 1.6em;
    font-weight: bold;
    margin: .8em auto 1em;
  }
  svg {
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;

const FooterNav = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 476px;
  margin: auto;
  li {
    display: inline-block;
    list-style-type: none;
    a {
      color: #E87E7E;
      font-family: 'Ubuntu', sans-serif;
      text-decoration: none;
      font-size: 1.2em;
      text-transform: uppercase;
      &:hover {
        cursor: pointer;
      }
      @media (max-width: 767px) {
        font-size: .8em;
      }
    }
  }
`;

const Footer = ({children, menuLinks, }) => {
  return (
    <FooterContainer>
      <Wrapper>
        <Flower/>
        <h4>WITH LOVE GILBERT & MIA</h4>
        <FooterNav>
          {menuLinks.map((item) => {
            return (
              <>
                <li><a onClick={() => scrollTo(item.link)}>{item.name}</a></li>
              </>
            )
          })}
        </FooterNav>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer;

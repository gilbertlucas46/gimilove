import React from 'react'
import styled from 'styled-components'

import Wrapper from './wrapper.component'

const FooterContainer = styled.footer`
 
`;

const Footer = ({children}) => {
  return (
    <FooterContainer>
      <Wrapper>
        {children}
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer;

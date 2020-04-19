import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import HeaderImage from './HeaderImage'
import Navigation from './ui/Navbar'

const HeaderContainer = styled.header`
  
`;

const Header = ({ headerData, location }) => {
  console.log(location)
  return (
    <HeaderContainer>
      {location.pathname === "/" ? <HeaderImage/> : ""}
      <Navigation/>
    </HeaderContainer>
  )  
}
Header.propTypes = {
  headerData: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

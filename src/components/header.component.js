import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import HeaderImage from './header-image.component'
import Navigation from './ui/navbar.ui'

const HeaderContainer = styled.header`
  
`;

const Header = ({ headerData, location, menuLinks }) => {
  console.log(location)
  return (
    <HeaderContainer>
      {location.pathname === "/" ? <HeaderImage/> : ""}
      <Navigation
      menuLinks={menuLinks}
      headerData={headerData}
      />
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

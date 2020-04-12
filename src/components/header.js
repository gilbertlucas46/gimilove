import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { HeartDivider } from './ui/divider'
import WeddingCountdown from './ui/weddingCountdown'

const HeaderImageContainer = styled.div`
  height: 100vh;
  position: relative;
  .gatsby-image-wrapper {
    height: 100vh;
  }
  h1 {
    font-family: 'Leckerli One', cursive;
    color: white;
    font-size: 6.9em;
    line-height: 1;
    margin: 0;
    font-weight: normal;
    letter-spacing: 1px;
  }
  h2 {
    font-family: 'Noto Serif', serif;
    color: white;
    font-size: 2em;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin: .5em 0 0;
    font-weight: normal;
  }
  h3 {
    font-family: 'Noto Serif', serif;
    color: white;
    font-size: 1.8em;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin: 1em 0 0;
    font-weight: normal;
  }
  .divider {
    margin: 1.5em 0;
  }
`;

const HeaderCaptions = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 17em;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

const CountdownContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2em;
`;

const Header = ({ headerData }) => {
  return (
    <header>
      <HeaderImageContainer>
        <Img fluid={headerData.image.childImageSharp.fluid} />
        <HeaderCaptions>
          <h1>{headerData.title}</h1>
          <h2>Are Getting Married</h2>
          <div className="divider divider---white">
            <HeartDivider/>
          </div>
          <h3>{headerData.formatteddate}</h3>
        </HeaderCaptions>
        <CountdownContainer><WeddingCountdown date={headerData.normaldate}/></CountdownContainer>
      </HeaderImageContainer>
    </header>
  )  
}
Header.propTypes = {
  headerData: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import scrollTo from 'gatsby-plugin-smoothscroll'

import Brand from "./brand.ui"
const Navigation = ({menuLinks, headerData}) => {
  
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })
  const [open, setOpen] = useState(false);
  // monitor the state of the Navigation
  // add/remove click event handler to the document
  useEffect(() => {
    const clickHandler = ({ target }) => {
      const container = document.getElementById(`gatsby-focus-wrapper`)
      if (container.contains(target)) return
      setOpen(false)
    }

    document.addEventListener("click", clickHandler)

    // these functions clean up the event listeners
    return () => document.removeEventListener("click", clickHandler)
  })

  // same but for keypresses
  // if the esc key is pressed close the Navigations
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return
      setOpen(false)
    }
    document.addEventListener("keydown", keyHandler)

    return () => document.removeEventListener("keydown", keyHandler)
  })
  // useSpring({ open ? 0 : 1 })
  // assumes that show and active are classes for css
  const { isOpen } = useSpring({ isOpen: open ? 0 : 1 });
  return (
    <div>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <CollapseWrapper style={{
            transform: isOpen.interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
          }}
          >
          <NavLinks className={open ? "show" : ""} style={linkAnimation}>
            {menuLinks.map((item) => <li key={item.name}><a onClick={() => scrollTo(item.link)}>{item.name}</a></li>)}
          </NavLinks>
          </CollapseWrapper>
          
          <BurgerWrapper>
            <Wrapper
              aria-expanded={open === true ? "true" : "false"}
              className={open === true ? "active" : ""}
              onClick={() => setOpen(!open)}
            >
              <Hamburger className={open ? "open" : "" }>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
              </Hamburger>
            </Wrapper>
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
    </div>
  )
}

export default Navigation

const Hamburger = styled.div`
  /* position: absolute;
  height: 32px;
  top: 0;
  bottom: 0;
  margin: auto; */
`;

const NavBar = styled(animated.nav)`
  position: relative;
  background-color: #F77F84;
  z-index: 99;
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    width: 100%; 
  }
`

const FlexContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  margin: auto;
  justify-content: space-between;
  position: relative;
  @media (min-width: 768px) {
    display: flex; 
    padding: 0 2rem;
    height: 5rem;
  }
  @media (max-width: 767px) {
    height: 4rem;
  }
`

const NavLinks = styled(animated.ul)`
  background-color: #F77F84;
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  li {
    display: inline-block;
    @media (max-width: 767px) {
      display: block; 
    }
  }
  & a {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Ubuntu', sans-serif;
    font-weight: normal;
    padding: .5em 0px;
    &:hover {
      color: #8c363b;
      border-bottom: 2px solid #8c363b;
    }
  }
  @media (min-width: 768px) {
    display: inline-block;
    width: 100%;
    text-align: right;
  }
  @media (max-width: 767px) {
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
  }
  &.show {
    height: 100vh;
    line-height: 3em;
    li {
      @media (max-width: 767px) {
        margin: 4% 0;
      }
    }
  }
`

const BurgerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
  bottom: 0;
  margin: auto;
  height: 51px;
  > div {
    position: unset;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;
  max-width: 1100px;
  margin: auto;
  & span {
    background: white;
    display: block;
    position: relative;
    width: 1.8rem;
    height: 0.2em;
    margin-bottom: 0.4em;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`
const CollapseWrapper = styled(animated.div)`
  
  @media (min-width: 768px) {
    transform: none !important;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
`;

import React from 'react'
import styled from 'styled-components'
import { DividerPink } from './divider.ui'

const TitleContainer = styled.h3`
  font-family: 'Leckerli One', cursive;
  text-align: center;
  font-size: 42px;
  color: #323232;
  margin: 0;
  line-height: 1;
  font-weight: normal;
`;

const Titles = ({children}) => {
  return (
    <>
      <TitleContainer>
        {children}
      </TitleContainer>
      <DividerPink/>
    </>
  )
}

export default Titles;

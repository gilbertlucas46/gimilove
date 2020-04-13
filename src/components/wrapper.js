import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.section`
  padding: 5em 0;
  max-width: 1100px;
  margin: auto;
`;

const Wrapper = ({ children }) => {
  return (
    <WrapperStyle>
      { children }
    </WrapperStyle>
  )
}

export default Wrapper

import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.section`
  padding: 5em 0;
  max-width: 1100px;
  margin: auto;
  @media (max-width: 767px) {
    padding: 5em 1em;
  }
`;

const Wrapper = ({ children, id }) => {
  return (
    <WrapperStyle id={id}>
      { children }
    </WrapperStyle>
  )
}

export default Wrapper

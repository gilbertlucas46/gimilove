import React from 'react';
import styled from 'styled-components';
import Heart from '../../images/icons/heart-white.svg';

const Divider = styled.div`
  position: relative;
  margin: auto;
  @media (min-width: 768px) {
    width: 550px; 
  }
  @media (max-width: 768px) {
    width: 300px; 
  }
  &:before, &:after {
    position: absolute;
    height: 1px;
    background-color: white;
    top: 0;
    bottom: 0;
    margin: auto;
    @media (min-width: 768px) {
      width: 225px;
    }
    @media (max-width: 767px) {
      width: 110px;
    }
  }
  &:before {
    content: '';
    left: 0;
  }
  &:after {
    content: '';
    right: 0;
  }
  svg {
    max-width: 25px;
  }
`;

const HeartDivider = () => {
  return (
    <Divider>
      <Heart/>
    </Divider>
  )
}

export { HeartDivider };

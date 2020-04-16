import React from 'react';
import styled from 'styled-components';
import HeartWhite from '../../images/heart-white.svg';
import HeartPink from '../../images/heart.svg';

const DividerWhiteContainer = styled.div`
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
    margin-top: 8px;
  }
`;

const DividerPinkContainer = styled.div`
  position: relative;
  margin: auto;
  width: 130px;
  margin-top: .5em;
  text-align: center;
  &:before, &:after {
    position: absolute;
    height: 1px;
    background-color: #F77F84;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 42px;
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
    margin-top: 8px;
  }
`;

const DividerWhite = () => {
  return (
    <DividerWhiteContainer>
      <HeartWhite/>
    </DividerWhiteContainer>
  )
}

const DividerPink = () => {
  return (
    <DividerPinkContainer>
      <HeartPink/>
    </DividerPinkContainer>
  )
}

export { DividerWhite, DividerPink };

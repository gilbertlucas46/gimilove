import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.div`
  button {
    background-color: #CC5D61;
    border: 0;
    line-height: 3rem;
    font-size: 1.2rem;
    color: white;
    border-radius: 52px;
    min-width: 8rem;
    line-height: 52px;
    width: 90%;
    @media (max-width: 767px) {
      width: 100%;
      max-width: 100%;
    }
    @media (min-width: 992px) {
      max-width: 200px;
    }
    &:hover {
      background-color: #d4363a;
      -webkit-transition: all 200ms ease-in;
      color: #fff;
      text-align: center;
      border: 0;
      cursor: pointer;
      border-radius: 52px;
      a {
        color: #ffff;
      }
    }
  }
  a {
    padding: 0 1rem;
  }
  margin-top: .5em;
  border-radius: 52px;
  min-width: 6rem;
  display: inline-block;
  line-height: 2.8rem;
  font-size: 1.2rem;
  color: #ed2654;
  letter-spacing: 2px;
  -webkit-transition: all 200ms ease-in;
  text-align: center;
  overflow: hidden;
  width: 100%;
  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
  &:hover {
    -webkit-transition: all 200ms ease-in;
    color: #fff;
    text-align: center;
    cursor: pointer;
    a {
      color: #ffff;
    }
  }
  a {
    color: #ed2654;
    text-decoration: none;
  }
`;

const Button = ({ children }) => (
  <ButtonContainer>{children}</ButtonContainer>
);
export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

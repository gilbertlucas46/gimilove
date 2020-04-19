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
    &:hover {
      background-color: #d4363a;
      -webkit-transition: all 200ms ease-in;
      color: #fff;
      text-align: center;
      max-width: 14rem;
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
  border-radius: 52px;
  min-width: 6rem;
  display: inline-block;
  line-height: 2.8rem;
  font-size: 1.2rem;
  color: #ed2654;
  letter-spacing: 2px;
  -webkit-transition: all 200ms ease-in;
  text-align: center;
  max-width: 14rem;
  overflow: hidden;
  width: 90%;
  &:hover {
    -webkit-transition: all 200ms ease-in;
    color: #fff;
    text-align: center;
    max-width: 14rem;
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

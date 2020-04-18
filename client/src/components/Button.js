import React from "react";
import styled from 'styled-components';
import {mapPropsToFontSize} from './styled'

export const ProtoButtonStyled = styled.button`
  appearance: none;
  border-radius: 30px;
  z-index: 1;
  position: relative;
  font-size: ${mapPropsToFontSize};
  font-family: inherit;
  color: #B378EF;
  padding: 0.5em 1em;
  background-color: #0E0302;

&:before {
  border-radius: 30px;
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  transform-origin: center left;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

&:hover {
  cursor: pointer;
}

&:hover::before {
  transform-origin: center right;
  transform: scaleX(1);
}
  
  
  
`;


export const Button = (props) => {
    return (
        <ProtoButtonStyled {...props}/>
    )
};
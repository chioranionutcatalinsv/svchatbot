import React from "react";
import styled from 'styled-components';

const mapPropsButtonType = (props) => {
    if(!props.color){
        return 'rgb(9, 51, 160)'
    }
    if (props.color === 'defaultGrey') {
        return 'rgb(147, 136, 136)';
    }
    if(props.color === 'refresh'){
        return '#1AA1B7';
    }
    if (props.color === 'danger') {
        return '#C82334';
    }
    if (props.color === 'primary') {
        return 'rgb(9, 51, 160)';
    }
};

export const ProtoButtonStyled = styled.button`
  margin-right: 5px;
  border-radius: 5px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: ${mapPropsButtonType};
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  font-family:'Roboto', cursive !important;
  &:before {
  font-family:'Roboto', cursive !important;
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

&:hover {
  cursor: pointer;
  color: #161616;
}
`;


export const Button = (props) => {
    return (
        <ProtoButtonStyled {...props}/>
    )
};
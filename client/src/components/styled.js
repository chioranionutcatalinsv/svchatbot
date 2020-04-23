import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {GithubSquare} from '@styled-icons/fa-brands/GithubSquare';
import {Chat} from '@styled-icons/entypo/Chat'
import {Robot} from '@styled-icons/remix-line/Robot';
import {Health} from '@styled-icons/boxicons-regular/Health';
import {InfoLargeOutline} from '@styled-icons/typicons/InfoLargeOutline';
import svCogLogo from "../assets/logos/svCog.png";
import smiles from "../assets/logos/smileys.svg";
import {Jumbotron} from 'react-bootstrap';

//DEFS STYLE
const Z_INDEX_HEADER = 1;
const Z_INDEX_CHAT = Z_INDEX_HEADER + 1;
const Z_INDEX_MODAL = Z_INDEX_CHAT + 1;

export const MEDIUM_RANGE = ['40.0625em', '64em'];
export const MEDIUM_UP = `only screen and (min-width:${MEDIUM_RANGE[0]})`;

//STYLING FUNCTIONS
export const mapPropsToFontSize = (props) => {
  if(props.fontSize){
      return `${props.fontSize}`
  }
  return `20px`;
};


const mapPropsToColor = (props) => {
    if(props.color === 'purple'){
        return '#B378EF';
    }
    if(props.color === 'white'){
        return '#FFFFFF';
    }

    return '#0E0302'
};

//STYLED COMPONENTS AND STYLES
export const CoolJumbotron = styled(Jumbotron)`
  font-size: inherit;
  font-family: inherit;
  color: white;
  background-color: white;
  outline: none;
  margin-bottom: 20px;
  

&:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
`;

export const LiItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SignatureBox = styled.span`
  position: relative;
  margin-right: 20px;
  &:before {
 content: '';
    position: absolute;
    top: 60px;
    left: 23%;
    width: 130%;
  height: 2px;
  opacity: 0;
  background-color: #B378EF;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: all 0.3s ease-in-out;
}

&:hover::before {
  transform: translate(-50%, 0) scaleX(1);
  opacity: 1;
}
`;

export const TalkToMeTextSignature = styled.p`
   align-items: center;
   color: #B378EF;
   color:${mapPropsToColor};
   font-size: ${mapPropsToFontSize};
   padding: 10px 20px 10px 10px;
   margin: 0;
`;

export const BotLogo = styled.div`
    display:flex;
    align-items: center;
    background-image: url(${smiles});
	background-position:left;
	background-repeat:no-repeat;
	background-size: contain;
    width: 50px;
    height: 50px;
    margin:5px;
`;

export const AiRobotIcon = styled(Robot)`
    color: black;
    height: 60px;
    weight: 60px;
`;

export const InfoIcon = styled(InfoLargeOutline)`
    color: black;
    height: 60px;
    weight: 60px;
`;

export const ChatIcon = styled(Chat)`
    color: black;
    height: 60px;
    weight: 60px;
`;

export const HealthIcon = styled(Health)`
    color: black;
    height: 60px;
    weight: 60px;
`;

export const RobotIconToGitLink = styled(GithubSquare)`
    color: white;
    height: 67px;
    padding: 10px;
`;

export const CogSvLogo = styled.div`
    background-image: url(${svCogLogo});
	background-position:left;
	background-repeat:no-repeat;
	background-size:contain;
    width: 140px;
    height: 67px;
`;

export const StyledNavLinkExternal = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px 40px 10px 40px;
  
  &:hover{
    text-decoration: none;
    color: #B378EF;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 10px 40px 10px 40px;
  
  &:hover{
    text-decoration: none;
    color: #B378EF;
  }
`;

export const LinkList = styled.ul`
    display:flex;
    flex-direction:row;
    margin: 0;
`;

export const HeaderContainer = styled.header`
  display:flex;
  z-index: ${Z_INDEX_HEADER};
  flex-direction: row;
  justify-content: space-around;   /* first 3 lines 2 split right side and left side of header */
  position:fixed;
  top: 0;
  background-color: black;
  width: 100%;
  font-family: 'Roboto', cursive !important ;
  -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
`;

export const Content  = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.p`
    grid-column-start: 2
    color: #B378EF;
  
`;


export const ModalStyledHook = styled.div`
 .modal {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width:100%;
      height: fit-content;
      background: rgba(0, 0, 0, 0.3);
      
}

.modal-main {
  border-radius: 1px;
  border-style: solid;
  border-color: black;
  padding: 10px;
  position:fixed;
  background: white;
  width: 49%;
  z-index: ${Z_INDEX_MODAL};;
  height: fit-content;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}

.display-none {
  display: none;
}
`;

export const ChatWrapperStyleHook = styled.div`   
   p {
      color: black;  
    }
    .rcw-close-button{
        background-color: #B378EF;
    }
    .rcw-header {
        background-color: #B378EF;
    }
    .}
    .rcw-widget-container{
        z-index: ${Z_INDEX_CHAT};
        
         @media ${MEDIUM_UP} {
            max-width: 535px;
        }
    }
    .rcw-launcher {
        height: 80px;
        width: 80px;
        box-shadow: none !important;
        background-color: #B378EF;
    }
    .rcw-conversation-container{
        width: 100%;
        
    }
`;
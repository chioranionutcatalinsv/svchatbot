import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {GithubSquare} from '@styled-icons/fa-brands/GithubSquare';
import svCogLogo from "../assets/logos/svCog.png";
import chatbotLogo from "../assets/logos/botsv.svg";

export const TalkToMeSignature = styled.p`
   align-items: center;
   color: #B378EF;
   font-size: 20px;
   padding: 10px 20px 10px 10px;
   margin: 0;
`;

export const BotLogo = styled.div`
    display:flex;
    align-items: center;
    background-image: url(${chatbotLogo});
	background-position:left;
	background-repeat:no-repeat;
	background-size:contain;
    width: 30px;
    height: 44px;
`;

export const RobotIconToGitLink = styled(GithubSquare)`
  color: white;
  height: 40px;
  padding-right: 50px;
`;

export const CogSvLogo = styled.div`
    background-image: url(${svCogLogo});
	background-position:left;
	background-repeat:no-repeat;
	background-size:contain;
    width: 125px;
    height: 40px;
`;

export const StyledNavLinkExternal = styled.a`
  text-decoration: none;
  color: white;
  align-items: center;
  padding: 10px 40px 10px 40px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  align-items: center;
  padding: 10px 40px 10px 40px;
`;

export const LinkList = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    align-content: space-around;
`;
export const HeaderContainer = styled.header`
  display:flex;
  flex-direction: row;
  justify-content: space-around;   /* first 3 lines 2 split right side and left side of header */
  position:fixed;
  top: 0;
  background-color: black;
  opacity: 95%;
  width: 100%;
  font-family: 'Roboto', cursive !important ;
  -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
`;

export const Content  = styled.div`
  margin-top: 90px;
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
  position:fixed;
  background: white;
  width: 60%;
  z-index: 999999999999;
  height: fit-content;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border: 2px solid rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
        -webkit-background-clip: padding-box;
        -moz-background-clip: padding-box;
        background-clip: padding-box;
}

.display-none {
  display: none;
}
`;

import React from 'react';
import {HeaderContainer, LinkList, StyledNavLink, RobotIconToGitLink, CogSvLogo, TalkToMeSignature, BotLogo, StyledNavLinkExternal} from './styled';
export const NavigationHeader = () => (
    <HeaderContainer>
        <div>
            <LinkList>
                <BotLogo/>
                <TalkToMeSignature>{'Talk2Me'}</TalkToMeSignature>
                <a target="_blank" href={'https://github.com/chioranionutcatalinsv/svchatbot'}>
                    <RobotIconToGitLink/>
                </a>
                <CogSvLogo/>
            </LinkList>
        </div>
        <div>
            <LinkList>
                <StyledNavLink  to={'/'}>Chat</StyledNavLink>
                <StyledNavLinkExternal target="_blank" href='https://developer.ibm.com/callforcode/' >IBM CallForCode</StyledNavLinkExternal>
            </LinkList>
        </div>
    </HeaderContainer>

);
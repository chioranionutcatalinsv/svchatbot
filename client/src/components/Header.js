import React from 'react';
import {HeaderContainer, LinkList, StyledNavLink, RobotIconToGitLink, CogSvLogo, TalkToMeTextSignature, BotLogo, StyledNavLinkExternal, SignatureBox, LiItem} from './styled';
export const NavigationHeader = () => (
    <HeaderContainer>
            <LinkList>
                <BotLogo/>
                <SignatureBox>
                    <TalkToMeTextSignature fontSize={'35px'} color={'purple'}>{'Talk2Me'}</TalkToMeTextSignature>
                </SignatureBox>
                <a target="_blank" href={'https://github.com/chioranionutcatalinsv/svchatbot'}>
                    <RobotIconToGitLink/>
                </a>
                <CogSvLogo/>
            </LinkList>
            <LinkList>
                <LiItem>
                    <StyledNavLink  to={'/'}>Chat</StyledNavLink>
                </LiItem>
                <LiItem>
                    <StyledNavLinkExternal target="_blank" href='https://developer.ibm.com/callforcode/' >IBM CallForCode</StyledNavLinkExternal>
                </LiItem>
            </LinkList>
    </HeaderContainer>
);
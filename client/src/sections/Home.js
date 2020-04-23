import React, {Fragment, useState, useEffect} from "react";
import {NavigationHeader} from '../components/Header';
import {
    SignatureBox,
    Content,
    CoolJumbotron,
    TalkToMeTextSignature,
    ChatIcon,
    HealthIcon,
    InfoIcon,
    ChatWrapperStyleHook,
    rowStyle,
} from '../components/styled';
import {Button} from "../components/Button";
import {Modal} from "../components/Modal"
/*import { ChatFeed, Message } from 'react-chat-ui'*/ //maybe use this in the future if better then the react-chat-widget package
import {Row, Col, Container} from 'react-bootstrap';
import botSvgIcon from '../assets/logos/botLogo.svg';
import { Widget, addResponseMessage, setQuickButtons} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

export const assistantReply = async (text) => {
    return axios.post(window.location.origin + `/api/ibm/textQuery/${text}`);
};

const presentationParagraphs = [
    'The coronavirus pandemic has set a crisis that altered the way people live today and probably will also change people’s lifestyle after the various lockdown endings. Between the most affected areas of work were the financial services, the healthcare organisations and the government entities.',
    'Those institutions critically loaded with work are also responsible for offering information and reglementations that people around the world need to have access to in the context of the SARS-COV2 virus and COVID-19 disease.',
    'Artificial intelligence-powered chatbot technology is one quick and exact way of spreading consistent and real information by replying to the user’s concerns and questions. Our goal is to provide a digital solution that helps people and institutions or organizations to spread information and answer people’s questions about their wellness, physical and mental health and why not offer them additional support since the isolation can cause anxiety or depression.',
    'We focus on offering data to the users in nearby locations since the virus mutations, spreading rate of infections and death is different in all countries',
    'Our data resources are gathered from real entities that help the communities all around the world by offering access to data based on different kinds of APIs that are consumed internally by the chatbot solution to offer reliable information to the user.',
    'Another feature of the application is to help users to cope with the stress or anxieties during the isolation and help them relax since this situation can cause serious damage to your mental inner health.'
];

export const Home = () => {

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        addResponseMessage('Hey!');
    }, []);


    const handleQuickButtonClicked = async (quickReply) => {
        let response = await assistantReply(quickReply);
        addResponseMessage(response.data.output.generic[0].text);
    };

    const handleNewUserMessage = async (newMessage) => {
        let response = await assistantReply(newMessage);

        //future backend response this is how it should look for quickReplies
       /* response = {
            data: {
                output: {
                    quickReplies: ['Fever','Fatigue', 'Muscle pain'], //add quick replies node to response api from backend or ibm cloud
                    generic: [{
                        response_type: 'text', text: 'Do you have any of this synonyms?',
                    }]
                }
            }
        };*/

        addResponseMessage(response.data.output.generic[0].text);

        if(response.data.output.quickReplies && response.data.output.quickReplies.length > 0) {

            const decisionButtons = response.data.output.quickReplies.map(reply => (
                {value: reply, label: reply, onQuickButtonClicked: reply}
            ));

            setQuickButtons(decisionButtons);
        }
    };

    return (
        <Fragment>
            <NavigationHeader />
            <Modal hide={() => setShowModal(!showModal)} title={'What we can offer:'} isShowing={showModal} children={<ul>
                {presentationParagraphs.map((p, index) =>
                    <li key={index}>
                        {p}
                    </li>
                )}
            </ul>}/>
            <Content>
                <Container>
                    <CoolJumbotron>
                        <div className="container text-center">
                            <Button color={'purple'} onClick={() => setShowModal(!showModal)}>
                                {'Talk2Me Presentation'}
                            </Button>
                            <br/>
                            <br/>
                            <SignatureBox>
                                <TalkToMeTextSignature fontSize={'14px;'} color={'black'}>{'Our goal is to provide a digital solution that helps people and institutions or organizations to spread information and answer people’s questions about their wellness, physical and mental health and why not offer them additional support since the isolation can cause anxiety or depression.'}</TalkToMeTextSignature>
                            </SignatureBox>
                        </div>
                    </CoolJumbotron>
                    {!showModal && <Fragment>
                            <Row style={rowStyle} className="container-fluid bg-3 text-center">
                                <Col sm={4}>
                                    <ChatIcon />
                                    <TalkToMeTextSignature color={'purple'} fontSize={'20px;'}>{'AI powered Chatbot'}</TalkToMeTextSignature>
                                </Col>
                                <Col sm={{ span: 7, offset: 1 }}>
                                    <TalkToMeTextSignature fontSize={'15px;'}>{'Artificial intelligence-powered chatbot technology is one quick and exact way of spreading consistent and real information by replying to the user’s concerns and questions.'}</TalkToMeTextSignature>
                                </Col>
                            </Row>
                            <Row style={rowStyle} className="container-fluid bg-3 text-center">
                                <Col sm={4}>
                                    <HealthIcon />
                                    <TalkToMeTextSignature color={'purple'} fontSize={'20px;'}>{'Mental health assistant'}</TalkToMeTextSignature>
                                </Col>
                                <Col sm={{ span: 7, offset: 1 }}>
                                    <TalkToMeTextSignature fontSize={'15px;'}>{'We help users to cope with the stress or anxieties during the isolation and help them relax since this situation can cause serious damage to your mental inner health.'}</TalkToMeTextSignature>
                                </Col>
                            </Row>
                            <Row style={rowStyle} className="container-fluid bg-3 text-center">
                                <Col sm={4}>
                                    <InfoIcon />
                                    <TalkToMeTextSignature color={'purple'} fontSize={'20px;'}>{'Physical Wellness assistant'}</TalkToMeTextSignature>
                                </Col>
                                <Col sm={{ span: 7, offset: 1 }}>
                                    <TalkToMeTextSignature fontSize={'15px;'}>{'Offering information and reglementations that people around the world need to have access to in the context of the SARS-COV2 virus and COVID-19 disease.'}</TalkToMeTextSignature>
                                </Col>
                            </Row>
                        </Fragment>}
                </Container>
                <ChatWrapperStyleHook>
                    <Widget
                        handleQuickButtonClicked={handleQuickButtonClicked}
                        handleNewUserMessage={handleNewUserMessage}
                        profileAvatar={botSvgIcon}
                        title="Talk2Me"
                        subtitle="Your friendly companion"
                    />
                </ChatWrapperStyleHook>
            </Content>
        </Fragment>
    )
};
import React, {Fragment} from "react";
import {NavigationHeader} from '../components/Header';
import {Content} from '../components/styled';
export const Home = () => {

    return (
        <Fragment>
            <NavigationHeader />
            <Content>
                <h1>Content goes here</h1>
            </Content>
        </Fragment>

    )
};
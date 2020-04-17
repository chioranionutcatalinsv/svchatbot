import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader/root';
import './assets/css/style.css';
import {Switch, Route} from 'react-router-dom';
import {Home} from "./sections/Home";
import {GlobalFonts} from './assets/fonts/fonts';

const RouterSwitch = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                render={() => <Home />}
            />
        </Switch>
    );
};

const App  = () => {
    return (
       <Fragment>
           <GlobalFonts />
           <RouterSwitch />
       </Fragment>
    );
};



export default hot(App);

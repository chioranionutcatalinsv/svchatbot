import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
//bootstrap/dist/css/bootstrap.css without this react-bootstrap does not work..*/
//to make it faster i will use the griding system of bootstrap
//to make react-bootstrap work you need to yarn add react-bootstrap bootstrap 2 dependencies and after that import bootstrap/dist/css/bootstrap.css in index... annoying.

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

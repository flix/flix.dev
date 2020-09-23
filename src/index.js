import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactGA.initialize('UA-136308253-1', {debug: false});

ReactDOM.render(
    <BrowserRouter basename="/">
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import App from './App';

ReactGA.initialize('UA-136308253-1', {debug: false});

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);

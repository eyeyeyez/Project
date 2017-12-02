import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,BrowserRouter,} from 'react-router-dom';

import Routes from './routes'
import './styles/semantic.min.css'


ReactDOM.render(
   
    (<BrowserRouter>
        <Routes />
    </BrowserRouter>)
    , document.getElementById('root'));

    


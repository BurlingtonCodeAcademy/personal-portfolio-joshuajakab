import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './JS/App';
import About from './JS/About'
import * as serviceWorker from './JS/serviceWorker';


ReactDOM.render(<BrowserRouter><Switch><App /></Switch></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import HttpsRedirect from 'react-https-redirect';


ReactDOM.render(
    <HttpsRedirect>
        <App />
    </HttpsRedirect>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

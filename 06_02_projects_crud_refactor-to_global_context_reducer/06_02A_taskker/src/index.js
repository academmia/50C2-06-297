import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import './styles/taskker.css';

import App from './app/App';
import * as serviceWorker from './serviceWorker';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

// import './index.css';
import('./index.css').then( css => {} );

ReactDOM.render(
    <Router>
        <Suspense fallback={<div className="loading">Loading...</div>} >
            <App />
        </Suspense>
        {/* <IntlProvider locale='en' messages={ {"nav.home": "Home"} }>
            <App />
        </IntlProvider> */}
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

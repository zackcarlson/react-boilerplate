import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import '../dist/style.css';

ReactDOM.render((
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
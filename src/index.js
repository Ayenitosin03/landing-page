import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import '../node_modules/react-bootstrap'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


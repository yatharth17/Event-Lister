import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import App from './App';
let options = {
  timeout: 5000,
  position: positions.TOP_CENTER
};

ReactDOM.render(
  
  <AlertProvider template={AlertTemplate} {...options}>
  <App />
</AlertProvider>
  ,
  document.getElementById('root')
);

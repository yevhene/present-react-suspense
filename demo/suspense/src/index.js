import React, { StrictMode, unstable_AsyncMode as AsyncMode } from 'react';
import ReactDOM from 'react-dom';
import 'barecss';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AsyncMode>
    <StrictMode>
      <App />
    </StrictMode>
  </AsyncMode>
, document.getElementById('root'));
registerServiceWorker();

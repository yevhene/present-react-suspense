import React, { StrictMode, unstable_ConcurrentMode as ConcurrentMode } from 'react';
import ReactDOM from 'react-dom';
import 'barecss';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ConcurrentMode>
    <StrictMode>
      <App />
    </StrictMode>
  </ConcurrentMode>
, document.getElementById('root'));
registerServiceWorker();

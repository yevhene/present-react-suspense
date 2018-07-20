import React from 'react';
import ReactDOM from 'react-dom';
import 'barecss';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

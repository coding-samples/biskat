import "babel-polyfill"

import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../src/components/Root/Root'
import registerServiceWorker from './services/registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Root/>, document.getElementById('root'))
registerServiceWorker();


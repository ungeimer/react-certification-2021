import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet'

import { Principal } from './Principal';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TITLE = 'WizeTube';
ReactDOM.render(
  <React.StrictMode>
    <Principal />
    <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/routes'
import {CounterProvider} from './contadorContext'

ReactDOM.render(
  <CounterProvider>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
  </CounterProvider>
,
  document.getElementById('root')
);


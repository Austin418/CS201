import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {NewsProvider} from './util/context'
import "./styles/main.css"

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
    <App />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

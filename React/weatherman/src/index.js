import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import "./styles/main.css"
import { WeatherProvider } from './util/context'

ReactDOM.render(
  <React.StrictMode>
    {/* <WeatherProvider> */}
      <Router>
        <App />
      </Router>
    {/* </WeatherProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);



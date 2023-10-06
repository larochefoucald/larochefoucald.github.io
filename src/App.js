import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactGA from 'react-ga';
import { 
  BrowserRouter as Router, 
} from "react-router-dom";

import { config } from './config';
import  Main  from './components/Main';


export default function App()
{
  document.title=config.title;
  ReactGA.initialize(config.ga);

  return (
    <Router>
      <Main />
    </Router>
  );
}

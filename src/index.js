import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import Particles from "react-particles-js";


const particlesOptions = {
    particles: {
     number: {
       value:70,
       density: true,
       value_area:100000
     }
    }
  }

ReactDOM.render(
  <React.Fragment>
      <Particles params={particlesOptions} className= "particles" />

    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

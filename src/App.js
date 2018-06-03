import React, { Component } from 'react';
import twitterImage from './assets/icons/twitter.svg/';
import facebookImage from './assets/icons/facebook.svg/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Header-logo">Logo</div>
          <ul className="Header-nav">
            <li>About me</li>
            <li>About me</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="Content">
          This is the Content
        </div>
        <div className="Fotter">
          <p>Copyright © 2015 Designova</p>
          <div className="Footter-socail">
            <img src={twitterImage} />
            <img src={facebookImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

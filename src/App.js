import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
=======

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import logo from './logo.svg';
import './App.css';

import OnOff from './components/OnOff'

class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        onOff: false
      }
  }

  handleProp (prop) {
    console.log("hello");
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Reactronome</h2>
          </div>
          <OnOff onClick={this.handleProp} />
        </div>
      </MuiThemeProvider>
>>>>>>> 9502438d549e91b169eebd85a4487bc540f382db
    );
  }
}

export default App;

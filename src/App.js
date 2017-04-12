import React, { Component } from 'react';

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
    );
  }
}

export default App;

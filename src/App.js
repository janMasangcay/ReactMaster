import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>This button has been clicked {this.props.clicks} times.</button> // This is the button
    );
  }
}

export default App;

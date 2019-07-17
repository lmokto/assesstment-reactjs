import React, { Component } from 'react';
import NavBar from './components/NavBar'
import PopulationList from './components/PopulationList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar title="Brastlewark Population"/>
        <PopulationList />
      </div>
    );
  }
}

export default App;

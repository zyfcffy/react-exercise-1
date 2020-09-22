import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;

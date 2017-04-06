import React, { Component } from 'react'
import Navbar from './Navbar'
import Welcome from  './Welcome'
import Workout from './Workout'
import FirstQ from './FirstQ'
import FinalQ from './FinalQ'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Workout />
      </div>
    )
  }
}

export default App;

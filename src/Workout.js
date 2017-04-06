import React, { Component } from 'react'

class Workout extends Component {
    // constructor (){
    //     super()
    //     this.state  = {             
    //         mins: '',
    //         secs: '',
    //         tenths: '', 
    //         exercise: '',
            
    //     }
    // }    
    // componentDidMount (){
    //     notes
    // }





  render() {
    return <div className="columns is-multiline is-gapless is-mobile">
            <div className="column is-4 square1">
                <div className="container">
                    <h1><p id="output"><b>12:00:00</b></p></h1>
                    <div id="controls">
	                    <button id= "startPause" onclick="startPause()"><b id="start">Start</b></button>
                    </div>
                </div>
            </div>
            <div className="column is-8 square2">
                <img className="is-mobile workoutImage" src="http://unsplash.it/200/200random?" />
                <img className="workoutImage" src="http://unsplash.it/200/200random?" />
            </div>
            <div className="column is-4 square3">
                <div className="container">
                    <h1><p id="output"><b>04:00:00</b></p></h1>
                    <div id="controls">
	                    <button id= "startPause" onclick="startPause()"><b id="start">Start</b></button>
                    </div>
                </div>
            </div>
            <div className="column is-8 square4">4</div>
        </div>
  }
}

export default Workout
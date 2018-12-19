import React, { Component } from 'react';
import './App.css';
import  Appstore from '../src/appStore/appStore';

let colors = ['red', 'green', 'blue', 'orange', 'yellow'];

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        currentState: []

  }
}


  componentDidMount() {
    Appstore.getSubject().subscribe(value => {
      console.log("Subscription got", value);
      this.setState({ currentState: value})
   })

   this.shuffle(colors)
  }

  shuffle(arg) {
    for (let i = arg.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arg[i], arg[j]] = [arg[j], arg[i]];
  }
  return arg;
  }

  handleClick = (e) => {
    e.preventDefault();
    let currentColors = this.shuffle(colors)
    Appstore.updateValue(currentColors);

}



  render() {
    console.log('whats my state', this.state.currentState)

    return (
      <div>
        <h2>Pick a color</h2>
        <p>Current state color is:  {this.state.currentState.length > -1 ? this.state.currentState[0] : 'We got nothing' }</p>
        <button onClick={this.handleClick}>Assign new colors</button>
      </div>
    );
  }
}

export default App;

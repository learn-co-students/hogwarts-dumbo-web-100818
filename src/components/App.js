import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import HogFilter from './HogFilter'
import hogs from '../porkers_data';

//we need to pass hogs down as props to hoglist

//event listener for a pigs image
//the click will reveal specialy, weight, greased, medal

class App extends Component {

  state = {
    hogs: hogs
  }

  render() {
    console.log(this.state.hogs)
    return (
      <div className="App">
          < Nav />
          < HogFilter />
          < HogList hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;

//create an index: this should be a list that renders items
//list is a child of APP and Item is a child of List
// hog filter shoud be sibling(?) of hog list

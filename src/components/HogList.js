import React, { Component } from 'react';
import HogCard from './HogCard'

class HogList extends Component {
  //we are going to pass INDIVIDUAL hogs to hog card.
  //we must map through the array

  //here, we will use state to decide which hogs are having hog card render
  //we need a click event to trigger. we will click a button on this parent

  render() {
    console.log(this.props.hogs)
    return (
      <div className="ui grid container">
      
      {this.props.hogs.map(hog => <HogCard hog={hog}/>)}
      </div>
    );
  }

}

export default HogList;

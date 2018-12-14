import React, { Component } from 'react';

export default class Hog extends Component{

  state={
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    // this.setState((prevState) => {
    //   return {clicked: !prevState.clicked}
    // })
  }
    // const fileName = './hog-imgs/' + this.props.hog.name.split(' ').join('_').toLowerCase() + '.jpg'

  render(){
    const fileName = this.props.hog.name.split(' ').join('_').toLowerCase() + '.jpg'

    return(
      <div onClick={() => this.handleClick()} className='tile'>
        <h1>{this.props.hog.name}</h1>
        {this.state.clicked ? (<div>
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>{this.props.hog.greased ? "They are very greased": "They are not greased"}</p>
          <p>Weight Ratio to Refrigerator: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
        </div>) : (<div>

          <img alt="" src={require('../hog-imgs/' + fileName)}/>
        </div>)}
      </div>
    )
  }

  //




}

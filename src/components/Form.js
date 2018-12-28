import React, { Component } from 'react';

export default class Form extends Component{
  sortHogs = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.props.sortFunction(e.target.value)
  }

  render(){
    return(
      <div>
        <select onChange={this.sortHogs}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="greasy">Greasy</option>
        </select>


      </div>
      )
  }
}

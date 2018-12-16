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


/* <form onSubmit={this.sortHogs}>
    <input type="checkbox" name="All" value="All"/>All<br/>
    <input type="checkbox" name="Name" value="Name"/>Name<br/>
    <input type="checkbox" name="Weight" value="Weight"/>Weight<br/>
    <input type="checkbox" name="Greasy" value="Greasy"/>Greasy<br/>
  <input type="submit" value="Submit"/>
</form> */

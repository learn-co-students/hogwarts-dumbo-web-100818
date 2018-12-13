import React, { Component } from 'react'




class Filter extends Component {



  render() {
    return (
      <div>
        <label>Sort By: </label>
        <select onChange={this.props.handleSelectedValue}>
          <option value="all">Show All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    );
  }

}

export default Filter;

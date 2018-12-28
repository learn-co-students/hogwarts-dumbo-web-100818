import React, { Component } from 'react';

class Filter extends Component {

  render() {

    return (
      <div>
      <h3> Search A Cocktail By name <p></p>
      <input className="filter" onChange={(e) => this.props.handleFilter(e)} />
      </h3>
      <input className="filter" onChange={(e) => this.props.handleFilter(e)} />
      </div>
    );
  }

}

export default Filter;

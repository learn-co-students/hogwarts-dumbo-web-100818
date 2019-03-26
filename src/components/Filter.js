import React, { Component } from 'react'

class Filter extends Component {
render() {
  return (
    <div>
    <button onClick={this.props.filterPiggy}>
    Sort by name
    </button>
    <button onClick={this.props.filterPiggy}>
    Sort by weight
    </button>
    <button onClick={this.props.greaseCheck}>
    Check for Grease?
    </button>
    <br /> <br />
    </div>
  )
}
}

export default Filter

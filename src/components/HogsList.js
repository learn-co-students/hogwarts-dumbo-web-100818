import React, { Component } from 'react';
import Hog from './Hog'
import Filter from './Filter'

class HogsList extends Component {

  state = {
    input: ""
  }

  handleFilter = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const filteredHog = this.props.hogs.filter(hog => {
      return hog.name.toLowerCase().includes(this.state.input)
    })

    return (
      <div>
      <Filter handleFilter={this.handleFilter}/>
        {filteredHog.map(hog => {
          return <Hog key={hog.name} hog={hog} input={this.state.input}/>
        })}
      </div>
    );
  }
}

export default HogsList;

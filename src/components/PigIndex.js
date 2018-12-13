import React, { Component } from 'react'
import Pig from './Pig'
import Filter from './Filter'

class PigIndex extends Component {

  state = {
    pigName: '',
    sort: this.props.hogs,
    greased: false,
    name: '',
    weight: ''
  }

  showPiggy = (name) => {
    this.setState({
      pigName: name
    })
  }

  greaseCheck = () => {
    if (!this.state.greased) {
      this.setState({
        sort: this.props.hogs.filter(hog => hog.greased),
        greased: true
      }) } else {
      this.setState({
        sort: this.props.hogs,
        greased: false
  })  }
  }

  filterPiggy = (e) => {
    if (e.target.textContent === "Sort by name") {
    this.setState({
      sort: this.props.hogs.sort((a, b) => {
  const pigA = a.name.toUpperCase();
  const pigB = b.name.toUpperCase();
  let comparison = 0;
  if (this.state.name == "forward") {
    (pigA < pigB) ? comparison = 1 : comparison = -1
    this.setState({
      name: "reverse"
    })
  } else {
  (pigA > pigB) ? comparison = 1 : comparison = -1
  this.setState({
    name: "forward"
  })
}
  return comparison;
})
}) } else if (e.target.textContent === "Sort by weight") {
  this.setState({
    sort: this.props.hogs.sort((a, b) => {
const pigA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
const pigB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
let comparison = 0;
if (this.state.weight === "forward") {
  (pigA < pigB) ? comparison = 1 : comparison = -1
  this.setState({
    weight: "reverse"
  })
} else {
(pigA > pigB) ? comparison = 1 : comparison = -1
this.setState({
  weight: "forward"
})
}
return comparison;
})
})
}
  }
  render() {
    return (
      <div>
      <Filter filterPiggy={this.filterPiggy} greaseCheck={this.greaseCheck}  />
      <div className="ui grid container">
      {this.state.sort.map(hog => <Pig hog={hog} key={hog.id} showPiggy={this.showPiggy} pigName={this.state.pigName} />)}
      </div>
      </div>
    )
  }
}
export default PigIndex

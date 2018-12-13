import React, { Component } from 'react'

class Pig extends Component {

  state = {
    imgUrl: `../hog-imgs2/${this.props.hog.name.toLowerCase()}.jpg`,
    pigName: ''
  }

  onClicky = () => {
    this.setState({
      pigName: this.props.hog.name
    })
  }

  render() {
    return (
      <div className="ui eight wide column">
      <div className="pigTile"
        onClick={() => this.props.showPiggy(this.props.hog.name)}>
      <h3>{this.props.hog.name}</h3>
      <img src={process.env.PUBLIC_URL + '../hog-imgs2/' + this.props.hog.name + '.jpg' }/>
    { (this.props.hog.name === this.props.pigName) ?
      <div>
      <p>Specialty: {this.props.hog.specialty}</p>
      <p>Greased: {this.props.hog.greased.toString()}</p>
      <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
      <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
      </div>:
      <p></p>
    }

      </div>
      </div>
    )
  }
}

export default Pig

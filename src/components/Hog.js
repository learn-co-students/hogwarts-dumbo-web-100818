import React, { Component } from 'react';

class Hog extends Component {

  state = {
    showHog: false
  }

  hogImg = () => {
  let findName;
  findName = this.props.hog.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${findName}.jpg`)
  }

  handleClick = () => {
    this.setState({
      showHog: !this.state.showHog
    })
  }

  showHogDetail = () => {
    return (
      <div>
        <h3>specialty : {this.props.hog.specialty}</h3>
        <h3>greased: {this.props.hog.greased ? "greased" : "nope!"}</h3>
        <h3>weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
        <h3>highest medal achieved: {this.props.hog['highest medal achieved']}</h3>
      </div>
    )
  }


  render() {
    return (
      <div>
        <ul>
        <li><h1>{this.props.hog.name}</h1> </li>
        <img alt="" src={this.hogImg()}
        onClick={this.handleClick} />
        </ul>
        {this.state.showHog ? this.showHogDetail() : null}
      </div>
    );
  }
}

export default Hog;

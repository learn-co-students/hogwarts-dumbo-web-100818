import React, { Component } from 'react';

class HogCard extends Component {

  state = {
    showDetails: false
  }

  handleClick = () => {

    this.setState({
      showDetails: !this.state.showDetails
    })

  }

  formatURL = () => {
    let changedName;
    changedName = this.props.hog.name.toLowerCase().split(' ').join('_')
      return require(`../hog-imgs/${changedName}.jpg`)
  }

  details = () => {
    return (
      <div>
        <p>{this.props.hog.specialty}</p>
        <p>{this.props.hog.greased ? "greased" : "not greased"}</p>
        <p>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>{this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }


  render() {
    
    return (
      <div className="ui eight wide column">
        <img onClick={this.handleClick} alt="piggy" src={this.formatURL()} />
        <p>{this.props.hog.name}</p>
        {this.state.showDetails ? this.details() : null }
      </div>
    );
  }

}

export default HogCard;

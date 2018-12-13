import React, { Component } from "react";

class PigCard extends Component {
  state = {
    showPig: false
  };

  getImage = () => {
    const newName = this.props.pig.name
      .split(" ")
      .join("_")
      .toLowerCase();
    return newName;
  };

  showDetails = () => {
    this.setState({
      showPig: !this.state.showPig
    });
  };

  showPigData = () => {
    return (
      <div>
        <h4>Specialty: {this.props.pig.specialty}</h4>
        <h4>Weight: {this.props.pig.weight}</h4>
        <h4>Medal: {this.props.pig.medal}</h4>
      </div>
    );
  };

  render() {
    return (
      <div className="ui eight wide column">
        <h3>{this.props.pig.name}</h3>
        <img
          src={require(`../hog-imgs/${this.getImage()}.jpg`)}
          alt="pig"
          onClick={this.showDetails}
        />
        {this.state.showPig ? this.showPigData() : null} <br />
        <button
          onClick={() => this.props.handleDelete(this.props.pig)}
          data-name={this.props.pig.name}
        >
          Delete Pig
        </button>
      </div>
    );
  }
}

export default PigCard;

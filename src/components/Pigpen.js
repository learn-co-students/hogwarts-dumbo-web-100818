import React, { Component } from "react";
import PigData from "../porkers_data";
import PigCard from "./PigCard";
import Filter from "./Filter";

class Pigpen extends Component {
  state = {
    pigData: PigData
  };

  deleteTheHog = e => {
    let arr = [...this.state.pigData];
    let filteredArray = arr.filter(pig => {
      return pig !== e;
    });
    this.setState({
      pigData: filteredArray
    });
  };

  filterPigs = e => {
    if (e.target.value === "weight") {
      this.filterPigsWeight();
    } else if (e.target.value === "name") {
      this.filterPigsName();
    } else if (e.target.value === "all") {
      this.showAllPigs();
    }
  };

  filterPigsWeight() {
    let arr = [...this.state.pigData];
    let sortedArr = arr.sort(function(a, b) {
      return a.weight - b.weight;
    });
    this.setState({
      pigData: sortedArr
    });
  }

  filterPigsName() {
    let arr = [...this.state.pigData];
    let sortedArr = arr.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      pigData: sortedArr
    });
  }

  showAllPigs() {
    this.setState({
      pigData: PigData
    });
  }

  render() {
    let pigCardList = this.state.pigData.map(pig => {
      return (
        <PigCard pig={pig} key={pig.name} handleDelete={this.deleteTheHog} />
      );
    });

    return (
      <div className="ui grid container">
        <Filter handleSelectedValue={this.filterPigs} />
        {pigCardList}
      </div>
    );
  }
}

export default Pigpen;

import React, { Component } from 'react';
import Tile from './Tile'
import hogs from '../porkers_data'
import Form from './Form'

export default class HogContainer extends Component{

  state = {
    hogList: hogs,
    filteredList: hogs
  }

  changeHogName = (hogName) => {

    const newName = hogName.split(' ').join('_').toLowerCase()
    return newName
  }


  sortFunction = (formData) => {
    if(formData === "all"){
      this.setState({
        filteredList: this.state.hogList
      })
    } else if (formData === "name"){
      let newList = [...this.state.hogList].sort((hog1, hog2) => {return hog1.name.localeCompare(hog2.name)})
      this.setState({
        filteredList: newList
      })
    } else if (formData === "weight"){
      let newList = [...this.state.hogList].sort((hog1, hog2) => {return hog1.weight - hog2.weight})
      this.setState({
        filteredList: newList
      })
    }else {
      let newList = [...this.state.hogList].filter(hog => hog.greased === true)
      this.setState({
        filteredList: newList
      })
    }
  }


  render(){
    return(
      <div>
        <Form sortFunction={this.sortFunction}/>
          <div class="ui grid container">

          {this.state.filteredList.map((hog)=> {
             return <Tile hog={hog} hogImage={this.changeHogName(hog.name)}/>
          })}
          </div>
      </div>

    )
  }
}

import React, { Component } from 'react';
import Hog from './Hog'

export default class HogContainer extends Component{

  state={
    hogsList: this.props.hogs
  }

  nameSort = () => {
    const nameSorted = this.props.hogs.sort((a, b) => {
      a.name > b.name
    })

    this.setState({
      hogsList: nameSorted
    })
    return nameSorted
  }


  render(){
    const hogs = this.state.hogsList.map(hog => {
     return  <Hog hog={hog}/>
   })
   debugger
    return(
      <div>
        <form>
          <select id="hog-form" size="4">
            <option>No Filter</option>
            <option onClick={this.nameSort}>Name</option>
            <option>Weight</option>
            <option>Greased</option>
          </select>
        </form>
        <h1>{hogs}</h1>
      </div>
    )
  }


}

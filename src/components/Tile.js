import React, { Component } from 'react';


export default class Tile extends Component{

  state = {
    display: false
  }

  showInfo = (e) => {
    let infoDiv = e.target.previousElementSibling
    this.setState({
      display: !this.state.display
    })
    this.state.display ? (infoDiv.style.display = "block") : (infoDiv.style.display = "none")

    // taking the info div's display and changing it to the opposite of its current state
    // if display is true
  }

  render(){
    console.log('Names', this.props);
    return(
      <div class="ui eight wide column">
        <h3>{this.props.hog.name}</h3>

        <div class="invisible" style={{display:"none"}}  >
          <p>{this.props.hog.specialty}</p>
          {this.props.hog.greased? (<p>SUPER GREASY</p>):(<p>DRY AF</p>)}
          <p>{this.props.hog.weight}</p>
          <p>{this.props.hog['highest medal achieved']}</p>
        </div>

        <img onClick={this.showInfo} src={require(`../hog-imgs/${this.props.hogImage}.jpg`)} alt='hog' />
      </div>
    )
  }
}

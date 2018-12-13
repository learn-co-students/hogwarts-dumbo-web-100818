import React, { PureComponent } from 'react';

class PigForm extends PureComponent {

  state={
    name: '',
    weight: '',
    medal: ''
  }

handleChange = (e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}

submitPig=(e)=>{
  e.preventDefault()
  this.props.submitPig(this.state)
  this.setState({
    name:'',
    weight: '',
    medal: ''
  })
}


  render() {
    return (
      <div>
        <form onSubmit={this.submitPig}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <input type="text" name="weight" value={this.state.weight} onChange={this.handleChange}/>
          <input type="text" name="medal" value={this.state.medal} onChange={this.handleChange}/>
          <button type="submit">Submit Pig</button>
        </form>
      </div>
    );
  }

}

export default PigForm;

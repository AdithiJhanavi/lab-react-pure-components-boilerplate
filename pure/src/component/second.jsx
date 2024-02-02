import React, { Component } from 'react'

class Second extends Component {

  constructor(props){
    super(props);

    this.state = {
      toggle:false,
      value:0
    }
  }

  handleToggle = ()=>{
    this.setState({
      toggle:this.state.toggle===false?true:false
    })
  }

  handleCounter = ()=>{
    if(this.state.toggle===true){
      this.setState({
        value:this.state.value+1
      })
    }
    else{
      this.setState({
        value:this.state.value
      })
    }
  }
  


  render() {
    console.log("Simple Component")
    return (
      <div className='main'>
        <h1>Simple Component</h1>
        <h3>{this.state.value}</h3>
        <button className='btn' onClick={this.handleToggle}>Set Toggle</button>
        <button className='btn' onClick={this.handleCounter}>Counter</button>
      </div>
    )
  }
}


export default Second;
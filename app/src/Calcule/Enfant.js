import React, { Component } from 'react'

class Enfant extends Component {

    constructor(props){
        super();
        this.state = {
            valEnfant : 0,
        }

        this.handlAddEnfant = this.handlAddEnfant.bind(this)
        this.remonteEnfant = this.remonteEnfant.bind(this)
    }

    handlAddEnfant(){
        this.setState(()=>({
            valEnfant : this.state.valEnfant+2
        }),this.remonteEnfant)

    }

    remonteEnfant(){
        this.props.remonteEnfant(this.state.valEnfant)
    }

  render() {
    return (
      <><button onClick={this.handlAddEnfant}>+2 Enfant</button>
      <label>Enfant somme Parent</label>
      <input type='text' value={this.props.val1}  ></input>
      <label>Enfant somme Enfant</label>
      <input type='text'  value={this.state.valEnfant} ></input>
      <label>Enfant somme Total</label>
      <input type='text' value={this.state.valEnfant+this.props.val1} ></input></>
    )
  }
}

export default  Enfant;

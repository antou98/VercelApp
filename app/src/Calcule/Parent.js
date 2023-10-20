import React, { Component } from 'react'
import Enfant from './Enfant';
class Parent extends Component {
    constructor(){
        super();
        this.state = {
            valParent : 0,
            valEnfant : 0
        }
        this.handleAddParent = this.handleAddParent.bind(this)
        this.getValueFromChild = this.getValueFromChild.bind(this)
    }

    handleAddParent(){
        this.setState(()=>({
            valParent : this.state.valParent+1
        }))
    }

    getValueFromChild(val){
        this.setState(()=>({
            valEnfant : parseInt(val)
        }))
    }




  render() {
    return (
        <>
        <button onClick={this.handleAddParent}>+1 Parent</button>
        <label>Parent somme Parent</label>
        <input type='text' value={this.state.valParent}  ></input>
        <label>Parent somme Enfant</label>
        <input type='text' value={this.state.valEnfant}  ></input>
        <label>Parent somme Total</label>
        <input type='text' value={this.state.valParent+this.state.valEnfant}  ></input>
        <br></br>
        <Enfant val1={this.state.valParent} remonteEnfant={this.getValueFromChild}></Enfant>


        </>
      
    )
  }
}

export default Parent;

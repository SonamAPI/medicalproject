import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LifeCycleDemo extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      first
   }
 }

componentDidMount(){
    console.log("componentDidMount");
}



  render() {
    return (
      <div>LifeCycleDemo</div>
    
    )
  }
}

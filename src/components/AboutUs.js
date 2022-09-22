import React, { Component } from 'react';import Navigations from './Navigations';
class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div >
        {/* nav bar  start*/}
        <Navigations></Navigations>
        {/* nav bar end */}



        <h2>ABOUT US</h2>



        <br></br><br></br><br></br>


      </div>

    )
  }
}

export default AboutUs
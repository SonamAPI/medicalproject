import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (




           
<footer className="page-footer  blue pt-4">

  
  <div className="container-fluid  text-md-left">

   
    <div className="row">

      
      <div className="col-md-6 mt-md-0 mt-3">

        
        <h5 className="text-uppercase">Online Medicine Donation</h5>
        <p>This application is mainly designed for medicine donation facility.<br></br>
© 2021 This application  is registered in India as a "Online MEdicine Donation Application" | Registration No. E4330.</p>

      </div>
      

      

      
      <div className="col-md-3 mb-md-0 mb-3">

       
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/contactus">Contact Us</a>
          </li>
          <li>
            <a href="/feedback">Give us a feedback</a>
          </li>
          
        </ul>

      </div>
      
     


    </div>
   

  </div>
 

 
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/">www.google.com</a>
  </div>

</footer>

        )
    }
}

export default FooterComponent
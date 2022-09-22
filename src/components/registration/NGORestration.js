import React, { Component } from 'react'
import APICalls from '../../services/APICalls';

export default class NGORestration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: "",
      mail: "",
      userAddress: "",
      password: "",
      yearofest: "",
      contact: "",
      membername: "",
      regNo: "",
      role: ""
    }
  }

  bloodGroupChange(e) {
    this.setState({
      bloodGroup: e.target.value
    });
  }

  memberNameChange(e) {
    this.setState({
      membername: e.target.value
    });
  }
  contactChange(e) {
    this.setState({
      contact: e.target.value
    });
  }
  roleChange(e) {
    this.setState({
      role: e.target.value
    });
  }
  fullNameChange(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  mailChange(e) {
    this.setState({
      mail: e.target.value
    });
  }

  userAddressChange(e) {
    this.setState({
      userAddress: e.target.value
    });
  }
  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }yrofeastyrofeast


  yrofeastChange(e) {
    this.setState({
      yearofest: e.target.value
    });
  } 
  
  regNoChange(e) {
    this.setState({
      regNo: e.target.value
    });
  }cancelBtn(e){
    e.preventDefault();
    window.location = '/login'
  }
  submitForm(e) {
    e.preventDefault();
    let hospitalObject = {
      fullName: this.state.fullName,
      mail: this.state.mail,
      userAddress: this.state.userAddress,
      password: this.state.password,
      gender: "none",
       age: 0,
       bloodGroup:"none",
      contact: this.state.contact,
      yearofest: this.state.yearofest,
      membername: this.state.membername,
      regNo:this.state.regNo,
      role: "NGO"
    }

    console.log(hospitalObject);
    APICalls.createUser(hospitalObject).then(
      (res)=>
      
      window.location = '/registerSuccess'

    )
  }
  render() {

    const roles = ["user", "admin","NGO","Donar","Hospital"]
  

    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <h4 className='text-center'>NGO Registration</h4><br></br>
            <div className="card col-md-6 offset-md-3 offset-md-3">

              <div className="card-body">
                <form >
                  <div className="form-group">
                    <label> Full Name: </label>
                    <input placeholder="Full Name" name="fullName" className="form-control" value={this.state.fullName} onChange={this.fullNameChange.bind(this)} />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label> Mail: </label>
                    <input placeholder="Email" name="mail" className="form-control" value={this.state.mail} onChange={this.mailChange.bind(this)} />
                  </div><br></br>
                 
                  <div className="form-group">
                    <label> Address: </label>
                    <input placeholder="Address" name="userAddress" className="form-control" value={this.state.userAddress} onChange={this.userAddressChange.bind(this)} />
                  </div><br></br>
                  <div className="form-group">
                    <label> Password: </label>
                    <input type="password" placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                  </div><br></br>

                  

                  
                  <div className="form-group">
                    <label> Contact: </label>
                    <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.contactChange.bind(this)} />
                  </div><br></br>
                 


                  <div className="form-group">
                    <label> Reg No: </label>
                    <input  placeholder="Reg No" name="regNo" className="form-control" value={this.state.regNo} onChange={this.regNoChange.bind(this)} />
                    
                  </div><br></br>
                  <div className="form-group">
                    <label> Member Name: </label>
                    <input placeholder="membername" name="membername" className="form-control" value={this.state.membername} onChange={this.memberNameChange.bind(this)} />
                  </div><br></br>

                  <div className="form-group">
                    <label> Year OF Eastablishment: </label>
                    <input  placeholder="year" name="yearofest" className="form-control" value={this.state.yearofest} onChange={this.yrofeastChange.bind(this)} />
                    
                  </div><br></br>

                  <button className="btn btn-outline-primary" style={{ marginLeft: "100px" }} onClick={this.submitForm.bind(this)}>Save</button>
                  <button className="btn btn-outline-danger" style={{ marginLeft: "200px" }}  onClick={this.cancelBtn.bind(this)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    )
  }
}

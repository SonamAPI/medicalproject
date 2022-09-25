import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import APICalls from '../../services/APICalls';

export default class AdminRegistration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: "",
      mail: "",
      userAddress: "",
      password: "",
      gender: "",
      contact: "",
      age: "",
      bloodGroup: "",
      role: "Admin"
    }
  }

  bloodGroupChange(e) {
    this.setState({
      bloodGroup: e.target.value
    });
  }

  ageChange(e) {
    this.setState({
      age: e.target.value
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
  }


  genderChange(e) {
    this.setState({
      gender: e.target.value
    });
  }  submitForm(e) {
    e.preventDefault();
    let hospitalObject = {
      fullName: this.state.fullName,
      mail: this.state.mail,
      userAddress: this.state.userAddress,
      password: this.state.password,
      gender: this.state.gender,
      contact: this.state.contact,
      age: this.state.age,
      bloodGroup: this.state.bloodGroup,
      role: this.state.role,
      yearofest: 0,
      membername: "",
      regNo:""
    }

    console.log(hospitalObject);
    APICalls.createUser(hospitalObject).then(
      (res)=>
      window.location = '/registerSuccess'

    )
  }
  cancelBtn(e){
    e.preventDefault();
    window.location = '/login'
  }
  render() {

   
    const genders = ["Male", "Female"]

    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <h4 className='text-center'>Admin Registration</h4><br></br>
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
                    <label> Age: </label>
                    <input placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.ageChange.bind(this)} />
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
                    <label> Gender: </label>
                    {genders.map(
                      (myGender, index) => {
                        return <div className="form-check" key={index}>
                          <input className="form-check-input" type="radio" name="gender" value={myGender} onChange={this.genderChange.bind(this)} />
                          <label className="form-check-label" htmlFor="gender">
                            {myGender}
                          </label>
                        </div>
                      }
                    )
                    }
                  </div><br></br>
                  <div className="form-group">
                    <label> Contact: </label>
                    <input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.contactChange.bind(this)} />
                  </div><br></br>
                  <div className="form-group">
                    <label> Blood Group: </label>
                    <select id='options' placeholder="Blood Group" name="bloodGroup" className="form-control" value={this.state.bloodGroup} onChange={this.bloodGroupChange.bind(this)} >
                      <option value="O +ve" >O +ve</option>
                      <option value="O -ve">O -ve</option>
                      <option value="A +ve">A +ve</option>
                      <option value="A -ve">A -ve</option>
                      <option value="B -ve">B -ve </option>
                      <option value="B +ve">B +ve </option>
                      <option value="AB +ve">AB +ve </option>
                      <option value="AB -ve">AB -ve </option>


                    </select></div><br></br>

                  <div className="form-group">
                    <label> Role </label>
                    <input placeholder="role" name="role" className="form-control" value={this.state.role} onChange={this.roleChange.bind(this)} />
                  </div><br></br>


                  <button className="btn btn-outline-primary" style={{ marginLeft: "100px" }} onClick={this.submitForm.bind(this)}>Save</button>
                  <button className="btn btn-outline-danger" style={{ marginLeft: "200px" }}  onClick={this.cancelBtn.bind(this)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div >

        <Link to="adminDashboard">Back</Link>
      </div >
    )
  }
}

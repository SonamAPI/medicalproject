import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../services/APICalls';
import CommanClass from './CommonClass';
import Navigations from './Navigations';

import RaiseRequestComponent from './RaiseRequestComponent';



class MedicineListComponent extends Component {
  
  constructor(props) {
   
    super(props)
    this.raiseRequest = this.raiseRequest.bind(this);

    this.state = {
      selectedMedicineID:"",      
      reqRaiseFlag: false,
      showTableFlag: false,
      roleForMedicineList: 'hospital',
      roleForPendingRequest: 'donor',
      id: '',
      medicineName: "",
      medicineType: "",
      medicineExpiry: "",
      medicineQuantity: "",
      medicineList: []

    }
  }
  componentDidMount(){
    APICalls.getAllMedicines().then(
      (resp)=>{
        this.setState({
          medicineList:resp.data
        })
      }

    );

    
  }

  medicineQuantityChange(e) {
    this.setState({
      medicineQuantity: e.target.value
    });
  }

  showTable() {
    this.setState({
      showTableFlag: true
    });
  }
  hideTable() {
    this.setState({
      showTableFlag: false
    });
  }

  medicineNameChange(e) {
    this.setState({
      medicineName: e.target.value
    });
  }

  medicineTypeChange(e) {
    this.setState({
      medicineType: e.target.value
    });
  }

  expDateChange(e) {
    this.setState({
      expDate: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    let hospitalObject = {
      "name": this.state.medicineName,
      "regNo": this.state.medicineType,
      "address": this.state.expDate,
      "medicineQuantityName": this.state.medicineQuantity
    }

    console.log(hospitalObject);
  }

  raiseRequest(medicineID) {
    console.log("med ID=", medicineID);
    this.setState({
      reqRaiseFlag: false,
      selectedMedicineID:medicineID
    })

    window.location='/raise-req';
   
  }
  render() {
    return (
      <div>
        <Navigations></Navigations>
        <br></br>

        {this.state.roleForMedicineList == 'user' ||
          this.state.roleForMedicineList == 'hospital' ||
          this.state.roleForMedicineList == 'NGO' ?
          <div className='row '>
            <table className='table table-striped table-bordered text-white text-center'>

              <thead>
                <tr>
                  <th>ID</th>
                  <th> Medicine Name</th>
                  <th> Medicine Type Name</th>
                  <th> Expriy Date</th>
                  <th> Quantity</th>
                  <th> Raise Request</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.medicineList.map(
                    med =>
                      <tr >
                         <td> {med.medId} </td>
                        <td> {med.medicineName} </td>
                        <td> {med.medicineType}</td>
                        <td> {med.medicineExpiry}</td>
                        <td> {med.medicineQuantity}</td>
                        <td>
                           <button onClick={ () => this.raiseRequest(med.medId)} className="btn btn-success">Raise Request </button></td>
                      </tr>
                  )
                }
              </tbody>
            </table>

          </div> : ''}


        {/* {this.state.roleForPendingRequest == 'donor' ? <div><button onClick={this.showTable.bind(this)}>See All Pending requests</button>  <button onClick={this.hideTable.bind(this)}>Hide  requests</button></div> : ''} */}


        {this.state.showTableFlag == true && this.state.roleForPendingRequest == 'donor' ?
          <div>
            <h3>All Pending Request</h3><br></br>
            <div className="row">
              <table className="table table-striped table-bordered">

                <thead>
                  <tr>
                    <th> Medicine Name</th>
                    <th> Medicine Type Name</th>
                    <th> Expriy Date</th>
                    <th> Quantity</th>
                    <th> Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.medicineList.map(
                      med =>
                        <tr key={med.id}>
                          <td> {med.medicineName} </td>
                          <td> {med.medicineType}</td>
                          <td> {med.expDate}</td>
                          <td> {med.medicineQuantity}</td>
                          <td>
                            {/* <button onClick={ () => this.editEmployee(med.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(med.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(med.id)} className="btn btn-info">View </button> */}

                            sssssssss                                            </td>
                        </tr>
                    )
                  }
                </tbody>
              </table>

            </div>

          </div>
          : ''}

        {this.state.reqRaiseFlag==true?<RaiseRequestComponent medicineID={this.state.selectedMedicineID}></RaiseRequestComponent>:''}
        <Link to='/dashboard'>Back</Link>
      </div>
    )
  }
}
export default MedicineListComponent
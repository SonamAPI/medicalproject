import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../services/APICalls';
import Navigations from './Navigations';

class AllRequestsForUser extends Component {
  constructor(props) {
    super(props)
    this.raiseRequest = this.changeStatus.bind(this);

    this.state = {
      selectedMedicineID: "",
      reqRaiseFlag: false,
      showTableFlag: false,
      roleForMedicineList: 'hospital',
      roleForPendingRequest: 'donor',
      id: '',
      medicineName: "",
      medicineType: "",
      medicineExpiry: "",
      medicineQuantity: "",
      medicineList: [],
      requestStatus: "created"


    }
  }
  componentDidMount() {
    APICalls.getAllRaiseRequest().then(
      (resp) => {
        this.setState({
          medicineList: resp.data
        })
      }

    );
  }
  changeRequestStatus(e) {
    e.preventDefault();
    const newRequestStatus = e.target.value
    this.setState({
      requestStatus: newRequestStatus
    });
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
    e.preventDefault();
    this.setState({
      medicineName: e.target.value
    });
  }

  medicineTypeChange(e) {
    e.preventDefault();
    this.setState({
      medicineType: e.target.value
    });
  }

  expDateChange(e) {
    e.preventDefault();
    this.setState({
      expDate: e.target.value
    });
  }



  changeStatus(medicineID) {
    console.log("med ID=", medicineID);
    // this.setState({
    //   selectedMedicineID: medicineID
    // })

    let requestObject = {
      id: medicineID,
      changedStatus: this.state.requestStatus
    }

    console.log(requestObject);
    APICalls.updateRaiseRequest(requestObject).then(
      (resp) =>
        console.log(resp.data)

    )

    window.location = '/all-request';
  }
  logout(e){
    e.preventDefault();
    window.location = '/';   
}
  render() {
    const statusList = ["aa", "dd", "ff"]
    return (
      <div>
        <Navigations></Navigations>
        <h4 class="display-4">All Raised Requests</h4>
        <br></br>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Req. ID</th>
                <th> Medicine Name</th>
                <th> Medicine Type Name</th>
                <th> Expriy Date</th>
                <th> Quantity</th>
                <th> Role</th>
                <th> Current status</th>
                <th> Status</th>
                <th> Change Status</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.medicineList.map(
                  (med, index) =>
                    <tr key={index}>
                      <td> {index + 1} </td>
                      <td> {med.raiseRequestmedId} </td>
                      <td> {med.medicineName} </td>
                      <td> {med.medicineType}</td>
                      <td> {med.medicineExpiry}</td>
                      <td> {med.medicineQuantity}</td>
                      <td> {med.role}</td>
                      <td> {med.status}</td>
                      <td><select id='options' onChange={this.changeRequestStatus.bind(this)}>
                        <option value="Created" selected>Created</option>
                        <option value="Approved">Approved</option>
                        <option value="Declined">Declined</option>
                        <option value="Pending">Pending</option>
                      </select></td>

                      <td>
                        <button onClick={() => this.changeStatus(med.raiseRequestmedId)} className="btn btn-info">Change Status </button></td>
                    </tr>
                )
              }
            </tbody>
          </table>

          <Link to='/dashboard'>Back</Link>
        </div>
      </div>
    )
  }
}
export default AllRequestsForUser
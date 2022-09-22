import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../services/APICalls';
import Navigations from './Navigations';

class AllCreatedRequests extends Component {
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
    APICalls.getCreatedRequest().then(
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
  render() {
    const statusList = ["aa", "dd", "ff"]
    return (
      <div>
        <Navigations></Navigations>
        <br></br>
        <h2>Approved Request</h2>
        <div className='row'  style={{"overflow-x":"auto"}}>
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
                      
                    </tr>
                )
              }
            </tbody>
          </table>

          <Link to='/admin'>Back</Link>
        </div>
      </div>
    )
  }
}
export default AllCreatedRequests
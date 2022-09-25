import React, { Component } from 'react'; import Navigations from './Navigations';
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



        <h2 className='text-white text-center'>ABOUT US</h2>



        <br></br>
        {/* <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4"> </div>
          <div class="col-sm-4"></div>
        </div> */}

        <div class="row">
          <div class="col-sm-1"> </div>
          <div class="col-sm-10"><h3>Objectives</h3></div>
          <div class="col-sm-1"></div>
        </div>



        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <p>
              <br></br>
              <ul>
                <li>Make A Platform To Accept Donations Of Unused Medicines</li>
                <li>Redistributing Unused. Unexpired, Unopened Drugs To Medicine Afford Less Persons</li>
                <li>Make A Healthy And Happy Nation</li>
                <li>Decrease Amount Of Medicine Going To Waste</li>
                <li>Avoid Cost Of Drug Disposal</li>
                <li>Collect Surplus. And About To Expire. Medicines From Healthcare Companies And Organizations. Like Pharmaceutical</li>
                <li>Manufacturers, Wholesalers, And Pharmacies</li>
                <li>Accept Monetary Donations To Buy Medicine For Needy Persons</li>
                <li>Accept Corporate Social Responsibility (CSR) Contributions</li>

              </ul>
            </p>

          </div>
          <div class="col-sm-1"></div>
        </div>


        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <p>
              <br></br>
              <h3> <b>Description</b></h3><br></br>

              This Unused Medicine Donation Project Aims To Donate Medicines Which Are Not Used The Unused Medicine Can Be Donated For Further Utilization By A Needy Person. <br></br>This Drug Donation System Helps The User To Donate Unused Medicines To NGO In This Medicine Donation System. <br></br><br></br>There Are Five Entities Namely, Admin, NGO, Donator, Recipient And Executive/Volunteer Admin Will Login And Manage Donators By Deleting And Blocking The Users Providing improper Or Expired Medicines Admin Also Has Authority To Approve The Appointment Requested By NGO. Admin Has Monthly Report Of Medicines Which Has Been Donated NGO Can Register And Login Using Credentials. <br></br><br></br><br></br>They Can Raise A Request Of Appointment Which is Furthermore Approved And Scheduled By Admin NGO Manages The Stock Which Helps To Maintain A Record Of The Available Medicine In Case of Security NGO Can Also Change Their Password Donators Can Register And Login Using Credentials. They Can Donate Medicine By Providing Medicines Details And Raising Request For Approval, Further It Will Be Approved By An Admin.<br></br><br></br><br></br> They Will Schedule The Donating Date Recipients Can Search For All Available Medicines In The System And Make A Request For A Particular Medicine With The Amount Required For Him Donators And Recipients Can Also Check Their Previous Data Of Medicine Transactions NGO Can See The Medicine Donations And Requests And Assign Collector Executive And Delivery Executive To Collect Medicines And Deliver Medicines Respectively

            </p>

          </div>
          <div class="col-sm-1"></div>
        </div>







        <div>
          <br></br>

          
        </div>


      </div>

    )
  }
}

export default AboutUs
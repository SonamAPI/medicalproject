import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import HospitalRegistration from './components/registration/HospitalRegistration';
import DonarRegistration from './components/registration/DonarRegistration';
import NGORestration from './components/registration/NGORestration';
import UserRegistration from './components/registration/UserRegistration';
import AdminRegistration from './components/registration/AdminRegistration';
import MenuComponent from './components/MenuComponent';
import LoginComponent from './components/LoginComponent';

import MedicineListComponent from './components/MedicineListComponent';
import RaiseRequestComponent from './components/RaiseRequestComponent';
import DashBoardUser from './components/DashBoardUser';
import FeedbackComponent from './components/FeedbackComponent';

import AllRequests from './components/AllRequests';
import DashBoardAdmin from './components/DashBoardAdmin';
import AllApprovedRequests from './components/AllApprovedRequests';
import AllPendingRequests from './components/AllPendingRequests';
import AllDeclinedRequests from './components/AllDeclinedRequests';
import AllCreatedRequests from './components/AllCreatedRequests';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ErrorPage from './components/ErrorPage';
import background from "./medical2.jpg";
import SuccessRegister from './components/SuccessRegister';
import UserProvider from './components/ConstantClass';
import ParentClass from './components/ContextAPIDemo/ParentClass';

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <div className='container-fluid' style={myStyle}>
   <UserProvider>
    
      <HeaderComponent />

      <Routes>
      <Route path="/parent" element={<ParentClass />} />
        <Route path="/feedback" element={<FeedbackComponent />} />
        <Route path="/medicines" element={<MedicineListComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/dashboard" element={<DashBoardUser />} />
        <Route path="/raise-req" element={<RaiseRequestComponent />}></Route>
        <Route path="/all-request" element={<AllRequests />}></Route>createNGO
        <Route path="/createHospital" element={<HospitalRegistration />} />
        <Route path="/createUser" element={<UserRegistration />} />
        <Route path="/createNGO" element={<NGORestration />}></Route>
        <Route path="/createDonar" element={<DonarRegistration />}></Route>
        <Route path="/createAdmin" element={<AdminRegistration />}></Route>
        <Route path="/admin" element={<DashBoardAdmin />}></Route>
        <Route path="/approvedRequests" element={<AllApprovedRequests />}></Route>
        <Route path="/pendingRequests" element={<AllPendingRequests />}></Route>
        <Route path="/declinedRequests" element={<AllDeclinedRequests />}></Route>
        <Route path="/createdRequests" element={<AllCreatedRequests />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/feddback" element={<FeedbackComponent />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
        <Route path='/registerSuccess' element={<SuccessRegister></SuccessRegister>} />

      </Routes>
      </UserProvider>
      <FooterComponent />
    </div>


  );
} export default App;
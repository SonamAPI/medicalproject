import React, { Component } from 'react'
import APICalls from '../services/APICalls';
import ErrorPage from '../components/ErrorPage'; 
import DashBoard from './DashBoardUser';
import DashBoardUser from './DashBoardUser';
import DashBoardAdmin from './DashBoardAdmin';
import UserProvider from './ConstantClass';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoginPage: true,
            email: "",
            clearImmediate: "",
            message: "",
            role: ""
        }
        this.changeStattus=this.changeStattus.bind(this);
    }

    userNameChange = (e) => {
        e.preventDefault();
        const bio = e.target.value;
        this.setState({
            email: bio
        });
    };
    chanePassword = (e) => {
        e.preventDefault();
        const bio = e.target.value;
        this.setState({
            password: bio
        });
    };
    changeStattus(id,role){
        console.log('start changeStattus');
        this.setState({
            id:id,
            role:role
        })
        console.log('end changeStattus');

    }
    
    submitDataF = (e) => {
        e.preventDefault();

        console.log(this.state.email, " ", this.state.password);
        let responseId;
        let responseRole;
        APICalls.authenticate({ mail: this.state.email, password: this.state.password }).then(
            (resp) => {
                console.log(resp.data.message, ' ', resp.data.role);
                this.setState({
                    message: resp.data.message,
                    role: resp.data.role,
                    id: resp.data.id
                });
                responseId = resp.data.id;
                responseRole = resp.data.role;

                console.log("###id: ", responseId);
                console.log("###role: ", responseRole);
            }
        );
        console.log('calling changeStattus');
        this.changeStattus(1,"me");
        
        console.log("login response : ", this.state.message);
        //logic to refer
        //  (responseMessages === "success") ?window.location = '/dashboard':window.location = '/error'
        // window.location = '/dashboard'
        // if(responseMessages==='success') 
        // window.location = '/dashboard';
        // else if(responseMessages==='Invalide Credentials')
        // window.location = '/error';
    }

    //--------------------------
    seeAllMedicines(e) {
        e.preventDefault();
        window.location = '/medicines';
    }
    raiseRequst(e) {
        e.preventDefault();
        window.location = '/raise-req';
    }
    showPendingList(e) {
        e.preventDefault();
        window.location = '/pendingRequests';
    }
    showDeclinedList(e) {
        e.preventDefault();
        window.location = '/declinedRequests';
    }
    showCreatedList(e) {
        e.preventDefault();
        window.location = '/createdRequests';
    }

    createUser(e) {
        e.preventDefault();
        window.location = '/createUser';
    }
    createHospital(e) {
        e.preventDefault();
        window.location = '/createHospital';
    }
    createNGO(e) {
        e.preventDefault();
        window.location = '/createNGO';
    }
    createDonar(e) {
        e.preventDefault();
        window.location = '/createDonar';
    }
    createAdmin(e) {
        e.preventDefault();
        window.location = '/createAdmin';
    }

    //-------------------
    render() {
        const { id, role, changeObject } = this.context

        const resposneMessage = this.state.message;
        const resposneRole = this.state.role;
        const resposneID = this.state.id;

        let divv;
        if (resposneMessage === '' && this.state.showLoginPage == true) {

            divv = <div><div> <br></br>
                <br></br>
                <br></br>
                <div className="row row-cols-1">
                    <div className="col"> </div>
                    <div className="col"> </div>
                </div>

                <div className="row row-cols-2">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                        <br></br>
                        <br></br>
                        <br></br>

                     status variables =    {this.state.id}   {this.state.role} <br></br>
                     context variables : {id}  {role}
                        <div className='container' style={{ "overflowX": "auto" }} >
                            <table className="table text-center" cellSpacing="0" cellPadding="0" style={{
                                "padding": "16px",

                            }}>
                                <tbody>


                                    <tr className='text-center'>
                                        <th scope="col">
                                            <div className="card bg-light text-secondary" style={{
                                                "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                                "padding": "16px",
                                                "textAlign": "center",
                                                "backgroundColor": " #f1f1f1",
                                                "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                            }} onClick={this.createUser.bind(this)}>
                                                <h3>Create User</h3>
                                                <p>Create A New User</p>

                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="card bg-light text-primary" style={{
                                                "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                                "padding": "16px",
                                                "textAlign": "center",
                                                "backgroundColor": " #f1f1f1",
                                                "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                            }} onClick={this.createNGO.bind(this)}>
                                                <h3>Create NGO</h3>
                                                <p>Create A New NGO</p>

                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="col">
                                            <div className="card bg-light text-success" style={{
                                                "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                                "padding": "16px",
                                                "textAlign": "center",
                                                "backgroundColor": " #f1f1f1",
                                                "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                            }} onClick={this.createHospital.bind(this)}>
                                                <h3>Create Hospital</h3>
                                                <p>Create New Hospital</p>

                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="card bg-light text-warming" style={{
                                                "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                                "padding": "16px",
                                                "textAlign": "center",
                                                "backgroundColor": " #f1f1f1",
                                                "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                            }} onClick={this.createDonar.bind(this)}>
                                                <h3>Create Donar</h3>
                                                <p>Create New Donar</p>

                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                    <div className="col">

                        <div className="container">
                            <div className="row">
                                <h4 className='text-center'>Login</h4><br></br>
                                <div className="card col-md-6 offset-md-3 offset-md-3">

                                    <div className="card-body">
                                        <form >
                                            <div className="form-group">
                                                <label> Enter Mail:</label>
                                                <input placeholder="mail" name="mail" className="form-control" value={this.state.email} onChange={this.userNameChange.bind(this)} />
                                            </div>
                                            <br></br>
                                            <div className="form-group">
                                                <label> Enter Password : </label>
                                                <input placeholder="Password" name="Password" className="form-control" value={this.state.password} onChange={this.chanePassword.bind(this)} />
                                            </div><br></br>
                                            <br></br>
                                            <button className="btn btn-outline-primary text-center" onClick={this.submitDataF.bind(this)}>Save</button>

                                        </form>
                                    </div>
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="row row-cols-3">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="row row-cols-3"></div>
                <br></br>
                <br></br>
                <br></br></div></div>;


        }

        if (resposneMessage === 'success'&& resposneRole !='admin') {
            this.setState({
                showLoginPage: false
            })
            divv = <div>
                <UserProvider id={this.state.id} role={this.state.role}/>
                <DashBoardUser></DashBoardUser>
            </div>;
        }

        if (resposneMessage === 'success'&& resposneRole ==='admin') {
            this.setState({
                showLoginPage: false
            })
            divv = <div>
                
                <DashBoardAdmin></DashBoardAdmin>
            </div>;
        }
        if (resposneMessage === 'Invalide Credentials') {
            this.setState({
                showLoginPage: false
            })
            divv = <div>
                <ErrorPage></ErrorPage>

            </div>;
        }


        return (
            <div>
                {divv}




            </div>

        )
    }
}

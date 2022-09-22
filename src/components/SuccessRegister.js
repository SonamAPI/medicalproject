import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../services/APICalls';
import Navigations from './Navigations';
class SuccessRegister extends Component {

    constructor(props) {
        super(props)

        this.state = {
            first: "",
            medicalDetails: [

                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" }
            ],
            items: []

        }
    }


    gotToLoginPage() {
        window.location = '/login';
    }
    



    render() {

        return (



            <div style={{ "backgroundImage": "url(/src/imageMy.jpg)" }} >
                {/* <Navigations></Navigations> */}

                <br></br><br></br>

                <h2 className='text-center text-white'>Registered Syccessfully</h2>



                <br></br><br></br><br></br>
                <div className='container' style={{ "overflowX": "auto" }} >
                    <table className="table text-center" cellSpacing="0" cellPadding="0" style={{
                        "padding": "16px",

                    }}>
                        <tbody>
                            <tr >
                                <th scope="col">
                                    <div className="card bg-light  text-dark" style={{
                                        "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                        "padding": "16px",
                                        "textAlign": "center",
                                        "backgroundColor": " #f1f1f1",
                                        "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                    }} onClick={this.gotToLoginPage.bind(this)}>
                                        <h3>Please click here to login</h3>
                                    </div>
                                </th>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>



        )
    }
}

export default SuccessRegister
import React, { Component } from 'react'

export default class HospitalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            password: "",
            medicalDetails: [

                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" },
                { id: 1, name: "AA", address: "adre1" }
            ],
        }
    }

    chaneUsername = (e) => {
        const bio = e.target.value;
        this.setState({
            userName: bio
        });
    };
    chanePassword = (e) => {
        const bio = e.target.value;
        this.setState({
            password: bio
        });
    };

    submitData = (e) => {
        console.log(this.state.userName, " ", this.state.password);
    };
    render() {
        return (
            <div className='container'>
                    <table className="table table-bordered ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.medicalDetails.map(
                                    (med, index) =>
                                        <tr key={index}>
                                            <td>{med.name}</td>
                                            <td>{med.address}</td>
                                            <td>{med.id}</td>
                                            <td><button className='btn btn-secondary'>Details</button></td>
                                        </tr>

                                )
                            }


                        </tbody>
                    </table>
                </div>
        )
    }
}

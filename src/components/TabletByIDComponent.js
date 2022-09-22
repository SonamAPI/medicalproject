import React, { Component } from 'react'

export default class TabletByIDComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            password: ""
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
            <div className='card'>
                <h3>Login Component</h3>

                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-4">
                        <table className="table table-bordered ">

                            <tbody>
                                <tr><th scope="col">ID</th><td></td></tr>
                                <tr><th scope="col">Name</th><td></td></tr>
                                <tr><th scope="col">Quantity</th><td></td></tr>
                                <tr><th>Click on button to Donate</th><td><button className='btn btn-primary'>Click</button></td></tr>



                            </tbody></table>

                    </div>
                    <div className="col-sm-3">.
                        Theme here
                    </div>

                </div>
            </div>
        )
    }
}

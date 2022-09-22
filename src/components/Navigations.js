import React, { Component } from 'react'

export default class Navigations extends Component {
    logout(e) {
        e.preventDefault();
        window.location = '/login';
    }
    render() {
        return (
            <div>
                {/* nav bar  start*/}
                <nav className="navbar navbar-expand-lg navbar-light text-white  bg-transparent">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><b>Give a Meaningfull Life</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/dashboard">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/dashboard">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/medicines">Medicines</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/raise-req">Raise a Request</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/all-request">Raised Request</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/billing">Billing</a>
                                </li>
                            </ul>
                            <form className="d-flex">

                                <button className="btn btn-outline-success" type="submit" onClick={this.logout.bind(this)}>Logout</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* nav bar end */}

            </div>
        )
    }
}

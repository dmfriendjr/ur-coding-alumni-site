import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TopNav extends Component {
    render() {
        return (
            <nav id="navBar" className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/">
                    <img src="/images/university-logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    University of Richmond Coding Bootcamp Alumni
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

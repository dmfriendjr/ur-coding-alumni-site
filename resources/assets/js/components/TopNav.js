import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoggedInNavbar from './LoggedInNavbar';

export default class TopNav extends Component {
   
    render() {
        return (
            <nav id="navBar" className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">
                    <img src="/images/university-logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    University of Richmond Coding Bootcamp Alumni
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {this.props.loggedIn && this.props.user.isAdmin ?
                            (<li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>)
                            :
                            ''
                        }
                        {!this.props.loggedIn ?
                            (<li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>)
                            :
                            <LoggedInNavbar />     
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

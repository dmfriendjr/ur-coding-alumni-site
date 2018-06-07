import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Carousel extends Component {
    onLogoutClicked() {
        axios.post('/logout', null, { headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content } })
    }

    render() {
            return (
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/events" className={window.location.pathname === "/events" ? "nav-link active" : "nav-link"}>
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Let us Build It
                        </Link>
                    </li>
                    <li>
                        <a onClick={this.onLogoutClicked} href="" className="nav-link">Logout</a>
                    </li>
                </ul>
            );
        }
    }
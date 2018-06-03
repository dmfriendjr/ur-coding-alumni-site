import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <Link to="/admin/event">Create Event</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

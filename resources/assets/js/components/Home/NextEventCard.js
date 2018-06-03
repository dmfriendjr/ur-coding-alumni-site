import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NextEventCard extends Component {
    render() {
        return (
            <div className="card mx-2">
                <div className="card-header">
                    <span>Next Event - 1/1/2018</span>
                </div>
                <div className="card-body next-event-card">
                    <p className="label">Location:</p>
                    <p>University of Richmond</p>
                    <p>Robins School of Business - Room 999</p>
                    <p>5:00 PM</p>
                    <p className="label">Topic:</p>
                    <p>Guest Speaker - Bill Gates</p>
                    <Link to='/events/billgates/'>View Details</Link>
                </div>
            </div>
        );
    }
}

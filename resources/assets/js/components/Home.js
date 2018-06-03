import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NextEventCard from './Home/NextEventCard';

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <h1>Welcome</h1>
                </div>
                <div className="col-md-4">
                    <NextEventCard/>
                </div>
            </div>
        );
    }
}

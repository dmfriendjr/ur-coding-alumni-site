import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NextEventCard from './Home/NextEventCard';
import Carousel from './Carousel';

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <Carousel/>
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

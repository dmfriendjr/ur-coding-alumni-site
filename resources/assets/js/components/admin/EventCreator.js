import React, { Component } from 'react';
import { Redirect } from 'react-router'
import DateTime from 'react-datetime';

import axios from 'axios';

export default class EventCreator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            topic:  '',
            time: '',
            messages: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        if (event._isAMomentObject) {
            this.setState({time: event});
        } else {
            this.setState({[event.target.name]: event.target.value});
        }
    }



    handleSubmit(event) {
        event.preventDefault();

        axios.post('event', {
            name: this.state.name,
            location: this.state.location,
            topic: this.state.topic,
            time: this.state.time.format("YYYY-MM-DD HH:mm:ss"),
        }, { headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content } })
            .then( (res) => {
                //Clear input and display success
                this.setState({
                    name: '',
                    location: '',
                    topic: '',
                    time: '',
                    messages: ['Event created successfully.']
                });
            })
            .catch( (err) => {
                if (err.response) {
                    this.setState({messages: Object.values(err.response.data.errors).map((errs) => errs[0])})
                }
            });
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div className="card">
                        <div className="card-header">New Event</div>

                        <div className="card-body">
                            <form>
                                { this.state.messages.map( (error, i) => {return <p className="bg-warning text-white rounded form-error" key={i}>{error}</p>})}
                                <div className="form-group">
                                    <label htmlFor="nameInput">Name</label>
                                    <input onChange={this.handleInput} value={this.state.name} name="name" type="text" className="form-control" id="nameInput" placeholder="Event Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="locationInput">Location</label>
                                    <input onChange={this.handleInput} value={this.state.location} name="location" type="text" className="form-control" id="locationInput" placeholder="Event Location" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="topicInput">Topic</label>
                                    <input onChange={this.handleInput} value={this.state.topic} name="topic" type="text" className="form-control" id="topicInput" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="timeInput">Time</label>
                                    <DateTime onChange={this.handleInput} value={this.state.time} inputProps={{name: "time", className: "form-control", id: "timeInput"}}/>
                                </div>

                                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

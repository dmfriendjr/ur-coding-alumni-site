import React, { Component } from 'react';
import { Redirect } from 'react-router'

import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loggedIn: props.loggedIn
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/login', {
            email: this.state.email,
            password: this.state.password,
        }, { headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content } })
            .then( (res) => {
                this.setState({loggedIn: true});
                this.props.onLogin();
            })
            .catch( (err) => console.log(err.response.data));
    }

    render() {
        return (
            <div className="row justify-content-center">
                { this.state.loggedIn ? <Redirect to="/" /> : ''}
                <div className="col-md-8">

                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input onChange={this.handleInput} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onChange={this.handleInput} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <p>Not Registered? <a href="/register">Create an account!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

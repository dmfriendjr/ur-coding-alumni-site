import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios'

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            'password_confirmation': this.state.password2
        }, { headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content } })
            .then( (res) => this.props.onLogin())
            .catch( (err) => console.log(err));
    }

    render() {
        return (
                <div className="row justify-content-center">
                    { this.props.loggedIn ? <Redirect to="/" /> : ''}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="nameInput">Name</label>
                                        <input onChange={this.handleInput} value={this.state.name} type="text" className="form-control" name="name" id="nameInput" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailInput">Email address</label>
                                        <input onChange={this.handleInput} value={this.state.email} type="email" className="form-control" name="email" id="emailInput" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input onChange={this.handleInput} value={this.state.password} type="password" className="form-control" name="password" id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password2">Password Confirmation</label>
                                        <input onChange={this.handleInput} value={this.state.password2} type="password2" className="form-control" name="password2" id="password2" placeholder="Password Confirmation" />
                                    </div>
                                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}


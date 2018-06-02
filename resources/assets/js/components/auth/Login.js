import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleInput(event) {
        console.log(event.target.value);
    }

    onFormSubmit() {

    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input onChange={this.handleInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onChange={this.handleInput} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Redirect } from 'react-router'
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(event) {
        console.log('Hadnling input');
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state.email, this.state.password);

        axios.post('/login', {
            email: this.state.email,
            password: this.state.password,
        })
            .then( (res) => {
                this.props.onLogin();
            })
            .catch( (err) => {if (err.response) this.setState({errors: err.response.data.errors})});
    }

    render() {
        console.log('Rendering');
        return (
            <div className="row justify-content-center">
                { this.props.loggedIn ? <Redirect to="/" /> : ''}
                <div className="col-md-8">

                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form>
                                { Object.values(this.state.errors).map( (error, i) => {return <p className="bg-warning text-white rounded form-error" key={i}>{error[0]}</p>})}
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

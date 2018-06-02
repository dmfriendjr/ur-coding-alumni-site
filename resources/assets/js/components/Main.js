import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopNav from './TopNav';
import {Login, Register} from './auth';
import Home from './Home';


export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthed: false
        }

        this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
        if (!this.state.isAuthed) {
            axios.get('/user/auth').then( (res) => { this.setState({isAuthed: res.data}) } );
        }
    }

    onLogin() {
        this.setState({isAuthed: true});
    }



    render() {
        return (
            <div>
                <Router>
                    <div className="app-container">

                        <TopNav loggedIn={this.state.isAuthed} />
                        <div className="container-fluid">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" render={()=><Login onLogin={this.onLogin} loggedIn={this.state.isAuthed}/>} />
                            <Route exact path="/register" render={()=><Register onLogin={this.onLogin} loggedIn={this.state.isAuthed}/>} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Main/>, document.getElementById('app'));
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopNav from './TopNav';
import {Login, Register} from './auth';
import Home from './Home';

export default class Main extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Router>
                    <div className="container-fluid">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </div>
                </Router>
            </div>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Main/>, document.getElementById('app'));
}

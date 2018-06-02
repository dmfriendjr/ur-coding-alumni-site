import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopNav from './TopNav';

export default class Main extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Example Component</div>

                                <div className="card-body">
                                    I'm an example component!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Main/>, document.getElementById('app'));
}

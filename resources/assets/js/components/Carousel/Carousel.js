import React, { Component } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';


export default class Carousel extends Component {
    render() {
        return (
            <div className="container" id="homeCarousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>`
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="responsive" src="/images/pp1.png" width="100%" height="400"   alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="responsive" src="/images/pp2.jpg" width="800" height="400" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="responsive" src="/images/pp3.jpg" width="800" height="400" alt="Third slide" />
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="false"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            </div>
        );
    }
}

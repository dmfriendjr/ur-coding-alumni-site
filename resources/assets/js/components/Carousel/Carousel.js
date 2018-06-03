import React, { Component } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';


export default class Carousel extends Component {
    render() {
        return (
            <div class="container" id="homeCarousel">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>`
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="responsive" src="/images/pp1.png" width="100%" height="400"   alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="responsive" src="/images/pp2.jpg" width="800" height="400" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="responsive" src="/images/pp3.jpg" width="800" height="400" alt="Third slide" />
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="false"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
            </div>
        );
    }
}

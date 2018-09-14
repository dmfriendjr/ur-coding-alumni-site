import React, { Component, Image } from 'react';
import { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';
//import { ceremony } from './images/ceremony.jpg';

class CarouselPage extends Component {
    render() {
        return (
            <Container>
                <h4 className="mt-5 mb-2">UR Coding Pride</h4>
                <Carousel
                    activeItem={1}
                    length={4}
                    showControls={true}
                    showIndicators={false}
                    className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                            <View>
                                <img className="d-block w-100" src= {require('./images/group.jpg')} alt="First slide" />
                            </View>
                        </CarouselItem>
                        <CarouselItem itemId="2">
                            <View>
                                <img className="d-block w-100" src= {require('./images/congrats.jpg')} alt="Second slide" />
                            </View>
                        </CarouselItem>
                        <CarouselItem itemId="3">
                            <View>
                                <img className="d-block w-100" src= {require('./images/ceremony.jpg')} alt="Third slide" />
                            </View>
                        </CarouselItem>
                        <CarouselItem itemId="4">
                            <View>
                                <img className="d-block w-100" src= {require('./images/ceremony.jpg')} alt="Mattonit's item" />
                            </View>
                        </CarouselItem>
                    </CarouselInner>
                </Carousel>
            </Container>
        );
    }
}

export default CarouselPage;
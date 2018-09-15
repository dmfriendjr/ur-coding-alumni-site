import React, { Component } from 'react';
import { Container, Card, CardBody, CardText, CardTitle, Button } from 'mdbreact';

// TODO - add proptypes

class CardPage extends Component {
    render() {
        return (
            <Container>
                <Card className="text-center" style={{ width: '20rem', marginTop: '1rem' }}>
                    <CardBody>
                        <CardTitle>Whiteboarding Workshop</CardTitle>
                        <h5>11/10/18</h5>
                        <CardText>Taking aim at the board with nerf guns.{"\n"}Taking fear out of the technical interview.</CardText>
                        
                        <Button color="primary">Register</Button>
                    </CardBody>
                </Card>

                <Card className="text-center" style={{ width: '20rem', marginTop: '1rem' }}>
                    <CardBody>
                        <CardTitle>Presenting: Uncle Bob, Speaker</CardTitle>
                        <h5>11/11/18</h5>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Register</Button>
                    </CardBody>
                </Card>

                <Card className="text-center" style={{ width: '20rem', marginTop: '1rem' }}>
                    <CardBody>
                        <CardTitle>Special title treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Register</Button>
                    </CardBody>
                </Card>
            
            </Container>
        );
    }
}
export default CardPage;
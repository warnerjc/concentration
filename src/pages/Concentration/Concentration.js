import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import Image from '../../components/Image';
import images from '../../images.json';

console.log(images);

class Concentration extends Component {

    state = {
        currentClickedID: null,
        hasBeenClicked: false,
        score: 0,
        topScore: 0
    }

    // Let's reset the game status on same image click
    // hasBeenClicked reset to false
    // update state of score and topScore
    resetGame = () => {

        images.map( image => {
            return (image.hasBeenClicked = 'false');
        });

        if (this.state.score > this.state.topScore) {
            this.setState({
                topScore: this.state.score,
                score: 0
            })
        } else {
            this.setState( {
                socre: 0
            })
        }
        
    };


    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        {                           
                            images.map( image => {
                                console.log('im here');
                                return (                                   
                                    <Col 
                                        size='3'
                                        children={
                                            <Image
                                                id={image.id}
                                                altTitle={image.altTitle}
                                                imageSrc={image.imageSrc}
                                                imageColor={image.imageColor}
                                                hasBeenClicked={image.hasBeenClicked}
                                            />
                                        }
                                    >                                        
                                    </Col>
                                );
                            })                            
                        } 
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Concentration;
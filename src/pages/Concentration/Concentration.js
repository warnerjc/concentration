import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import { Col, Row, Container } from '../../components/Grid';
import Image from '../../components/Image';
import images from '../../images.json';

class Concentration extends Component {

    state = {
        images: images,
        score: 0,
        topScore: 0
    }

    // Let's reset the game status on same image click
    // hasBeenClicked reset to false
    // update state of score and topScore
    resetGame = () => {

        images.map( image => {
            
            return (
                image.hasBeenClicked = false
            );

        });

        if (this.state.topScore < this.state.score) {
            this.setState({
                topScore: this.state.score,
                score: 0
            })
        } else {
            this.setState( {
                score: 0
            })
        }
        
    };

    // Let's shuffle the images array after every click
    shuffleImages = () => {

        // Temporary array that will be shuffled
        let tempArray = images;

        // Randomize tempArray, using Durstenfeld shuffle algorithm
        for (let i = tempArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = temp;
        }

        // Set images to the shuffled array
        this.setState({
            images: tempArray
        });        

    };

    // Let's handle the click of an image
    handleClick = event => {

        // get clicked image id
        const { id } = event.target;

        // map over the image array to check clicked image
        images.map( image => {

            // find matching image id
            if( parseFloat(image.id) === parseFloat(id) ) {
                // check if hasBeenClicked
                // if not, increase score, continue game
                if ( !image.hasBeenClicked ) {
                    
                    image.hasBeenClicked = true;
                    
                    this.setState({
                        score: this.state.score + 1
                    });

                // if so, alert user game over, then reset game
                } else {
                    
                    alert('Game over! This image has already been clicked.');

                    this.resetGame();

                }
            }     
        
        });

        // shuffle images after checking if hasBeenClicked
        this.shuffleImages();
        
        // delay testing win status
        setTimeout( () => {
            if (this.state.score === 12 ) {
                alert('You won! You clicked all the images!');
                this.resetGame();
            }
        }, 50);

    }

    render() {
        return (
            <React.Fragment>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Header />
                <Container>
                    <Row>
                        {                       
                            images.map( image => {
                                return (                                   
                                    <Col 
                                        size='12 sm-2 md-3'
                                        children={
                                            <Image
                                                id={image.id}
                                                altTitle={image.altTitle}
                                                imageSrc={image.imageSrc}
                                                imageColor={image.imageColor}
                                                onClick={this.handleClick}
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
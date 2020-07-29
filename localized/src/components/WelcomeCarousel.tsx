import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

class WelcomeCarousel extends React.Component {
    render() {
        return (
            <div id="welcomeCarousel">
                <Carousel>
                    <Carousel.Item>
                        <h2>Get Localized!</h2>
                        <h4>Welcome to Localized! A web app that allows anyone with a computer or mobile device to 
                            easily access any information they might need to feel confident enough to participate 
                            in their local government. We have an integrated <b>Civil Supporter</b> chatbot that is 
                            here to help too!</h4>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>Second Slide</h4>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    };
}

export default WelcomeCarousel;
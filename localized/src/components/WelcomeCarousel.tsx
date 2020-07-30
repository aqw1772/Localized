import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

class WelcomeCarousel extends React.Component {
    render() {
        return (
            <div id="welcomeCarousel">
                <Carousel fade={true} controls={false}>
                    {/* <ol className="carousel-indicators">
                        <li data-slide-to="0" className="active"></li>
                        <li data-slide-to="1"></li>
                    </ol> */}
                    <Carousel.Item>
                        <h1>Get Localized!</h1>
                        <br></br>
                        <h3>Welcome to Localized! A web app that allows anyone with a computer or mobile device to 
                            easily access any information they might need to feel confident enough to participate 
                            in their local government. </h3>
                        <br></br>
                        <h3>We have an integrated <b>Civil Supporter</b> chatbot that is 
                            here to help too!</h3>
                        <br></br>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Second Slide</h3>
                        <br></br>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Third Slide</h3>
                        <br></br>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>Fourth Slide</h3>
                        <br></br>
                        <br></br>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    };
}

export default WelcomeCarousel;
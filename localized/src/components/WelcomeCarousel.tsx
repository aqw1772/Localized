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
                        <h1>Civil Supporter</h1>
                        <br></br>
                        <h3>Your new local government companion is always ready for any question you might have 
                            about your local government!</h3>
                        <br></br>
                        <h3>Ask him what he can tell you!</h3>
                        <br></br>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1>My Content</h1>
                        <br></br>
                        <h3>All of the content that you might be interested is aggregated all in one place! Filter 
                            your interests, explore latest articles, local news, and upcoming events in your area.
                        </h3>
                        <br></br>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1>About Us</h1>
                        <br></br>
                        <h3>We are Team 13, Innovators For imPact (IFP), of The New Technologists program made 
                            possible by Shanon, Kristin, Jane, Lazaro, and our instructor Brian! Thank you so much 
                            for everything you've done for us!
                        </h3>
                        <br></br>
                        <br></br>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    };
}

export default WelcomeCarousel;
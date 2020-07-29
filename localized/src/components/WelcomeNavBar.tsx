import React from 'react';
import { pages } from "../App";
import tablet from "../images/tablet.png";
import phoneLaptop from "../images/phone-laptop.png";
import largeTablet from "../images/largeTablet.png";
import ComputerMacOS from "../images/ComputerMacOS.png";
import phone from "../images/phone.png";
import SignUp from "../images/SignUp.png";
import Login from "../images/Login.png";

//NavBar for the Welcome/Landing page
//The component will include icons of accessible devices in addition to 2 buttons for Sign Up and Login

interface IWelcomeNavBarProps {
    changePage: (page: pages) => void;
}


class WelcomeNavBar extends React.Component<IWelcomeNavBarProps> {
    render() {
        return (
            <div className="welcomeNavBar">
                <img src={tablet}></img>
                <img src={phoneLaptop}></img>
                <img className="largeTablet" src={largeTablet}></img>
                <img src={ComputerMacOS}></img>
                <img src={phone}></img>
                <img className="navButton" src={SignUp} onClick={(e) => this.props.changePage(pages.SignUpPage)}></img>
                <img className="navButton" src={Login} onClick={(e) => this.props.changePage(pages.MyContentPage)}></img>
            </div>
        )
    };
}

export default WelcomeNavBar;
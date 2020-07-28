import React from 'react';
import { pages } from "../App";

//NavBar for the Welcome/Landing page
//The component will include icons of accessible devices in addition to 2 buttons for Sign Up and Login

interface IWelcomeNavBarProps {
    changePage: (page: pages) => void;
}


class ItemList extends React.Component<IWelcomeNavBarProps> {
    render() {
        return (
            <div className="welcomeNavBar">
                
            </div>
        )
    };
}
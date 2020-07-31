import peopleSearch from "../images/PeopleSearch.png";
import Satya from "../images/Satya.png";
import React from 'react';
import { pages } from "../App"; {/* Not sure if I need this */}



//SideBar for the My Content page
//The component will include buttons (eventually draggable) portraying user interest categories

interface IMyContentSidebarProps {
    changePage: (page: pages) => void;
    userInterests: (any); // **update this line when user interests redux is implemented**
}


class MyContentSidebar extends React.Component<IMyContentSidebarProps> {
    render() {
        return (
            <div className="myContentSidebar">
                <div className="nameAndPic">
                    {/* Insert profile pic here */}
                    <img src={Satya}></img>
                    {/* Insert profile name here */}
                    <h4>Satya Nadella</h4> {/* test */}
                </div>
                {/* Dropdown goes here */}
                <span className="heading">
                    <img src={peopleSearch}></img>
                    Your Interests</span>
                <div className="interests">
                    <span className="school">School</span> 
                    <span className="protest">Protest</span>
                </div>
                {/* Edit interests button */}
            </div>
        )
    };
}

export default MyContentSidebar;
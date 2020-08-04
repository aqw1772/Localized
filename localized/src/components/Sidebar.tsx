import peopleSearch from "../images/PeopleSearch.png";
import AddInterests from "../images/AddInterests.png";
import Satya from "../images/Satya.png";
import React from 'react';
import { pages } from "../App";
import { BsChevronRight } from "react-icons/bs";
import BsChevronDown from "react-icons/bs";



//SideBar for the My Content page
//The component will include buttons (eventually draggable) portraying user interest categories

interface IMyContentSidebarProps {
    changePage: (page: pages) => void;
    userInterests: (any); // **update this line when user interests redux is implemented**
}


class MyContentSidebar extends React.Component<IMyContentSidebarProps> {

    // myFunction() {
    //     var checkBox = document.getElementById("arrow");
    //     var text = document.getElementById("text");
    //     if (checkBox.checked == true){
    //       text.style.display = "block";
    //     } else {
    //       text.style.display = "none";
    //     }
    // }

    render() {
        return (
            <div className="myContentSidebar">
                <div className="nameAndPic">
                    {/* Insert profile pic here */}
                    <img src={Satya}></img>
                    {/* Insert profile name here */}
                    <h4>Satya Nadella</h4>
                    <h3>Redmond, WA</h3>
                </div>
                {/* Dropdown goes here */}
                <span className="heading">
                    <img src={peopleSearch}></img>
                    Your Interests
                </span>
                <input id="arrow" className="arrow" type="checkbox"></input><BsChevronRight/>
                <div className="interests">
                    <span className="Schools">Schools</span> 
                    <span className="Protests">Protests</span>
                    <span className="Voting">Voting</span>
                </div>
                <br></br>
                <br></br>
                {/* Edit interests button */}
                <span className="edit" onClick={(e) => this.props.changePage(pages.BubblePage)}>
                    <img src={AddInterests}></img>
                    Edit Interests
                </span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <span className="logout" onClick={(e) => this.props.changePage(pages.WelcomePage)}>
                    Logout
                </span>
            </div>
        )
    };
}

export default MyContentSidebar;
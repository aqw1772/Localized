import React from "react"
import { pages } from "../App";
import ReactImage from "../Spin";
import {useSpring,animated} from 'react-spring';
import YS_icon from "./YS_icon.png";


interface AccountScreenProps {
  changePage: (page: pages) => void;
}

const AccountPage = (props:AccountScreenProps) => {
  return (
    <div className="wrapper">
        <div className="animate__rotateIn">
          <h1>YourShare</h1>
          <img src={YS_icon} alt=""></img>
        </div>

        {/*Second div represents right side of page*/}
        <div className="account">
          <h1>Join your community</h1>
          <h2>Sign-up</h2>
          {/*User input form*/}
          <form>
            <input type="text" placeholder="Username:"/>
            <br/>
            <input type="text" placeholder="Phone number:"/>
            <br/>
            <input type="text" placeholder="Zip code:"/>
            <br/>
            <button onClick={(e) => props.changePage(pages.BrowsePage)}>
              Join
            </button>
          </form>
        </div>
      <div className="App-link" onClick={(e) => props.changePage(pages.BrowsePage)}>
        Sign-in
      </div>
    </div>
  );
 
}

export default AccountPage;

import React from "react";
import { pages } from "../App";
import ReactImage from "../Spin";
import {useSpring,animated} from 'react-spring';

interface AccountScreenProps {
  changePage: (page: pages) => void;
}

const AccountPage = (props:AccountScreenProps) => {
  return (
    <div>
      <div>
      {/* This div represents the top left corner */}
        <ReactImage />
      </div>
      {/*First div represents left side of page*/}
      <div>
        <h1>YourShare</h1>
      </div>

      {/*Second div represents right side of page*/}
      <div>
        <h1>Join your community</h1>
        <h2>Sign-up</h2>

        {/*User input form*/}
        <form>
          <input type="text" placeholder="Username:"/>
          <input type="text" placeholder="Phone number:"/>
          <input type="text" placeholder="Zip code:"/>

          <button onClick={(e) => props.changePage(pages.BrowsePage)}>
            Join
          </button>
        </form>
      </div>
      <p className="App-link" onClick={(e) => props.changePage(pages.BrowsePage)}>
        Sign-in
      </p>
    </div>
  );
}

export default AccountPage;
// export class AccountPage extends React.Component<AccountScreenProps> {
//   render() {
    
    
//   }
// }

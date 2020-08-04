import React from "react";
import { pages } from "../App";
// import fb_logo from "../images/facebook.png";
import  {BsFillChatFill, BsChatFill} from "react-icons/bs";
import {BsPeopleFill} from "react-icons/bs";
import {BsPlusCircleFill} from "react-icons/bs";
import {BsChatSquareDotsFill} from "react-icons/bs";
import UniversalNavBar from "../components/UniversalNavBar";
// imported bootstrap icons in code

interface DesignCivilScreenProps {
  changePage: (page: pages) => void;
 // myurl: URL
}

export class DesignCivilPage extends React.Component<DesignCivilScreenProps> {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      // Class wrapper with Design Class wrapping contact and interests.
      <div className="Design">  
           <UniversalNavBar changePage={this.props.changePage}/>
           <p className="maintag"> Design your Civil Supporter</p>
          <p className="subhead"> Select your method Prefered Method of Contact <hr className="subhead"></hr></p>

          <div className="addContact">
            {/* buttons with preffered method of contact */}
            <button className ="contactm" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}> Microsoft Teams <BsPeopleFill /></button>
            <button className ="contactg" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}> GroupMe <BsChatSquareDotsFill /> </button>
            <button className ="contactt" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}> Text Message<BsChatFill /></button>
          </div><br/>
          <p className="subhead"> Select your prefered topic of interests
          <hr className="subhead"></hr>
          <button className="addbutton" onClick={(e)=> this.props.changePage(pages.BubblePage)} > Add interests <BsPlusCircleFill /> </button></p>
          <div className="addInterest">
            {/* buttons with each interest */}
              <button className="interests1"onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Voting</button>
              <button className="interests1" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Petitions</button>
              <button className="interests1"  onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Schools</button><br/>
              <button className="interests"  onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Protest</button>
              <button className="interests" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Taxes</button>
              <button className="interests"  onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Budget</button>
        </div> <br/>
        <button className="App-click" onClick={(e) => this.props.changePage(pages.MyContentPage)}>
         <p className="maintag1"> Create my Civil Supporter!</p> 
          </button>
    
    </div>
    );
  }
}


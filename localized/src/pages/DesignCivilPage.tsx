import React from "react";
import { pages } from "../App";
import fb_logo from "../images/facebook.png";
import  {BsFillChatFill} from "react-icons/bs";
import {BsFillEnvelopeOpenFill} from "react-icons/bs";
import {BsPlusCircleFill} from "react-icons/bs";
// imported bootstrap icons in code
import UniversalNavBar from "../components/UniversalNavBar";

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
          <p> Select your method Prefered Method of Contact</p>
          <div className="addContact">
            {/* buttons with preffered method of contact */}
            <button className ="contactf" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}>Facebook <img id="fb_logo" src={fb_logo}/></button>
            <button className ="contactt" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}> Text Message <BsFillChatFill /> </button>
            <button className ="contacte" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)}>Email <BsFillEnvelopeOpenFill /></button>
          </div><br/>
          <p>Select your prefered topic of interests
          <button className="addbutton" onClick={(e)=> this.props.changePage(pages.BubblePage)} > Add interests <BsPlusCircleFill /> </button></p>
          <div className="addInterest">
            {/* buttons with each interest */}
            <button className="interests1" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Voting</button>
            <button className="interests1" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Petitions</button>
            <button className="interests1" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Schools</button><br/>
            <button className="interests" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Protest</button>
            <button className="interests" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Taxes</button>
            <button className="interests" onClick={(e)=> this.props.changePage(pages.DesignCivilPage)} > Budget</button>
        </div> <br/>
        <button className="App-click" onClick={(e) => this.props.changePage(pages.MyContentPage)}>
         <p> Create my Civil Supporter!</p> 
          </button>
    
    </div>
    );
  }
}


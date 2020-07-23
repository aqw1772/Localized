import React from "react";
import { pages } from "../App";
import YS_upload from "./YS_upload.png";
import Icon_ArrowLeftCircle from "./icon_ArrowLeftCircle_.png";


interface AddItemScreenProps {
  changePage: (page: pages) => void;
}

export class AddItemPage extends React.Component<AddItemScreenProps> {
  render() {
    return (
      <div className="wrapper">
        <div>
          {/* Add back button (icon) and title at the top of the page */}
          <div className="back-button_title">
            <img src={Icon_ArrowLeftCircle} alt="" onClick={(e) => this.props.changePage(pages.BrowsePage)}/>
            <h1>Add Item</h1>
          </div>
           
           <form> {/*Maybe add a div so the spacing works? */}
            <input id="name" type="text" placeholder="Item name:"></input>
            <br></br>
            <input id="type" type="text" placeholder="Type:"></input>
            <br></br>
            <br></br>
            <textarea name="description" rows={15} cols={50} font-size="22px" placeholder="Description"></textarea>
          </form>
        </div>
      
        
        <div>
          
          <br></br>
          <div className="container">
            <input type="image" src={YS_upload} alt="file" width="80" height="400"></input>
            <label className="btn">Upload Picture</label>
          </div>
          
          <span>
              <div>
              <label className="cancel" onClick={(e) => this.props.changePage(pages.BrowsePage)}>Cancel</label>
              <button>Add item</button>
            </div>
          </span>
          
        </div>

      </div>
    );
  }
}
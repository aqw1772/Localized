import React from "react";
import { pages } from "../App";
import YS_upload from "./YS_upload.png";

interface AddItemScreenProps {
  changePage: (page: pages) => void;
}

export class AddItemPage extends React.Component<AddItemScreenProps> {
  render() {
    return (
      <div className="wrapper">
        <div>
          {/* Add back button (icon) at the top of the page */}
          <h1>Add Item</h1>
          <form> {/*Maybe add a div so the spacing works? */}
            <label>Item Name:</label> <input id="name" type="text"></input>
            <br></br>
            <label>Type:</label> <input id="type" type="text"></input>
            <br></br>
            <br></br>
            <textarea name="description" rows={10} cols={30} placeholder="Description"></textarea>
          </form>
        </div>
      
        
        <div>
          
          <br></br>
          <div className="container">
            <input type="image" src={YS_upload} alt="file" width="80" height="400"></input>
            <label className="btn">Upload Picture</label>
          </div>
          <br></br>
          <button>Cancel</button>
          <br></br>
          <br></br>
          <button>Add item</button>
        </div>

      </div>
    );
  }
}
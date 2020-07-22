import React from "react";
import { pages } from "../App";

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
          <input type="image" src="/images/YS_Upload.png" alt="file" width="80" height="80"></input>
          <br></br>
          <label>Upload Picture</label>
          <button>Cancel</button>
          <button>Add item</button>
        </div>

      </div>
    );
  }
}
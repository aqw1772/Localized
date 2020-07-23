import React from "react";
import { pages } from "../App";
import YS_blender from "./YS_blender.png";
import Icon_ArrowLeftCircle from "./icon_ArrowLeftCircle_.png";



interface BorrowItemScreenProps {
  changePage: (page: pages) => void;
}

export class BorrowItemPage extends React.Component<BorrowItemScreenProps> {
  render() {
    return (
      <div className="wrapper"> 
          <div>
            {/* Add back button (icon) and title at the top of the page */}
            <div className="back-button_title">
              <img src={Icon_ArrowLeftCircle} alt="" onClick={(e) => this.props.changePage(pages.BrowsePage)}/>
              <h1>Borrow Item</h1>
            </div>
            <form action="">
              <input type = "text" name ="name" placeholder="Item name: Blender" className="name" readOnly/>
              <br/>
              <input type = "text" name ="name" placeholder="Type: Kitchen" readOnly/>
              <br/>
              <input type = "text" name ="name" placeholder="Lender: Stacey" readOnly/>
              <br></br>
              <br/>
              <textarea rows={15} cols={50} readOnly>A pretty great Blender. The lid is a little loose so make
                  sure to hold it down when using to avoid a smoothie disaster.
              </textarea>
            </form>
          </div>
          
             
       
            <div>
                <div className="container">
                   <img src={YS_blender} alt="blender image" />
                 </div>
                 
                 <span>
                   <label className="cancel" onClick={(e) => this.props.changePage(pages.BrowsePage)}>Cancel</label>
                    <button>Request to Borrow</button>
                 </span>
                
                
            </div>
      </div>

    //form 
  



    );
  }
}
import React from "react";
import { pages } from "../App";
import YS_blender from "./YS_blender.png";



interface BorrowItemScreenProps {
  changePage: (page: pages) => void;
}

export class BorrowItemPage extends React.Component<BorrowItemScreenProps> {
  render() {
    return (
      <div className="wrapper"> 
          <div>
          <h3>Borrow item</h3>
            <form action="">
              <input type = "text" name ="name" placeholder="Item name: Blender" className="name" readOnly/>
              <br/>
              <input type = "text" name ="name" placeholder="Type: Kitchen" readOnly/>
              <br/>
              <input type = "text" name ="name" placeholder="Lender: Stacey" readOnly/>
              <br></br>
              <br/>
              <textarea rows={10} cols={30} readOnly>A pretty great Blender. The lid is a little loose so make
                  sure to hold it down when using to avoid a smoothie disaster
              </textarea>
            </form>
          </div>
          
       
            <div>
            <img src={YS_blender} alt=""></img>
                <h4>Cancel</h4>
                <button className="borrow">Request to borrow</button>
            </div>
      </div>

    //form 
  



    );
  }
}
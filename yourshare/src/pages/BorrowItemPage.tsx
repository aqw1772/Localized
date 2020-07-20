import React from "react";
import { pages } from "../App";


interface BorrowItemScreenProps {
  changePage: (page: pages) => void;
}

export class BorrowItemPage extends React.Component<BorrowItemScreenProps> {
  render() {
    return (
      <div>
         <h3>Borrow item</h3>

        <div className="row">
          <div className="column">
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
          
          <div className="column">
            <div>
                <img src="./images/YS_blender.png" alt="" className="blender"/>
                <h4>Cancel</h4>
                <button className="borrow">Request to borrow</button>
            </div>

              
            
        
           
  
          </div>
        </div>
     
      </div>

    //form 
  



    );
  }
}
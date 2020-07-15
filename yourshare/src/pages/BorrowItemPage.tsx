import React from "react";
import { pages } from "../App";


interface BorrowItemScreenProps {
  changePage: (page: pages) => void;
}

export class BorrowItemPage extends React.Component<BorrowItemScreenProps> {
  render() {
    return (
      <div>
        <h1>YourShare Borrow Item</h1>
            <h3>Borrow item</h3>
         <form action="">
            <input type = "text" name ="name" placeholder="Item name: Blender"/>
            <br/>
            <input type = "text" name ="name" placeholder="Type: Kitchen"/>
            <br/>
            <input type = "text" name ="name" placeholder="Lender: Stacey"/>
            <br></br>
            <br/>
            <textarea rows={10} cols={30}>A pretty great Blender. The lid is a little loose so make
                 sure to hold it down when using to avoid a smoothie disaster
            </textarea>
        </form>
            <div>
                <img src="./images/YS_blender.png" alt=""/>
            </div>
        <div>
            <button>cancel</button>
            <button>Request to borrow</button>
        </div>

      </div>

    //form 
  



    );
  }
}
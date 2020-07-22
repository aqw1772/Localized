import React from "react";
import { pages } from "../App";
import ItemList from "../components/ItemList/ItemList"
import {IYourShareState, IPerson } from "../redux/types";
import { connect } from 'react-redux';

interface BrowseScreenProps {
  changePage: (page: pages) => void;
  you: IPerson;
}

class BrowsePage extends React.Component<BrowseScreenProps> {
  render() {
    return (
    <div className="wrapper">
      <div>
          <h1>Welcome, {this.props.you.name}!</h1>
          {/* first table */}
          <ItemList changePage={this.props.changePage}/>
          {/* <table>
            <tr>
              <th>Items for borrowing</th>
              <th>Lender</th>
            </tr>
              <tr onClick={(e) => this.props.changePage(pages.BorrowItemPage)}>
                      <td>Blender</td> 
                      <td>Stacey</td>
              </tr>
              <tr>
                <td>Rake</td>
                <td>Marcos</td>
              </tr>
              <tr>
                <td>Car</td>
                <td>Marcos</td>
              </tr>
              <tr>
                <td>Bike</td>
                <td>Cam</td>
              </tr>
              <tr>
                <td>Drill</td>
                <td>Stacey</td>
              </tr>
              <tr>
                <td>Ladder</td>
                <td>Marcos</td>
              </tr>
              <tr>
                <td>Kayak</td>
                <td>Cam</td>
              </tr>
              <tr>
                <td>The Office DVD Box set</td>
                <td>Stacey</td>
              </tr>
              <tr>
                <td>Cart</td>
                <td>Jim</td>
              </tr>
            
          </table> */}
        </div>
        <div className="borrowRight"> {/* second table on right */}
          <table>
          <tr>
              <th>Your items</th>
              <th>Lent to</th>
            </tr>
            <tr>
                <td><em>Add your first item</em></td>
                <td><em>A friend</em></td>
            </tr>
          </table>
          <button onClick={(e) => this.props.changePage(pages.AddItemPage)}>
            Add item
          </button>
          <br/>
          <button onClick={(e) => this.props.changePage(pages.CommunityPage)}>
            Manage Community
          </button>
        </div>
        <div>


      </div>
    </div>
     
    );
  }
}

//Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. It return an object containing the store data you
// want to transmit as props to a component
// Here an object containing countValue is transmitted
function mapStateToProps(state: IYourShareState) {
  return {
    you: state.currentUser // "currentUser" in Redux state is 'you' on this page
  }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
  return {
    // no actions on this page / screen
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowsePage);

export { connectedComponent as BrowsePage }

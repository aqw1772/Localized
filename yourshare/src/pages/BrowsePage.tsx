import React from "react";
import { pages } from "../App";
import ItemList from "../components/ItemList/ItemList"
import {IYourShareState, IPerson } from "../redux/types";
import { connect } from 'react-redux';

export interface BrowseScreenProps {
  changePage: (page: pages) => void;
  you: IPerson;
}

class BrowsePage extends React.Component<BrowseScreenProps> {
  render() {
    return (
    <div>
        <h1>Welcome, {this.props.you.name}</h1>
        {/* first table */}
        <ItemList changePage={this.props.changePage}/>
        <p className="AddItem" onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
        </p>
        {/* <p onClick={(e) => this.props.changePage(pages.BorrowItemPage)}>
          
        </p> */}
        <p className="CommunityPage" onClick={(e) => this.props.changePage(pages.CommunityPage)}>
          Manage Community
        </p>
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

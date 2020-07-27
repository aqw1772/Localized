import React from 'react';
import "./ItemList.css";
// import { toggleItem } from '../../redux/actions';
import { IYourShareState, IPerson, IItem } from '../../redux/types';
import { connect } from 'react-redux';
import { pages } from "../../App";

// ToDoList component
// Render the component on the screen

interface IItemListProps {
    changePage: (page: pages) => void;
    listOfPeople: Array<IPerson>
}

class ItemList extends React.Component<IItemListProps> {
    render() {
        return (
            <div className="ItemList" >
                <table>
                    <thead>
                        <th>Items for borrowing</th>
                        <th>Lender</th>
                    </thead>
                    <tbody>
                        {this.props.listOfPeople.map((person: IPerson) => {
                            return person.items.map((item: IItem) => (
                                <tr key={person.id} > <td onClick={(e) => this.props.changePage(pages.BorrowItemPage)}>{item.name}</td><td>{person.name}</td></tr>)
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div >
        )
    };
}

// Connect

// This file permits to match the redux-specific hooks to be able to use them in React

// Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. It return an object containing the store data you
// want to transmit as props to a component
// Here an object containing countValue is transmitted
function mapStateToProps(state: IYourShareState) {
    return {
        listOfPeople: state.people
    }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
    return {
        // toggleItem: (id: string) => dispatch(toggleItem(parseInt(id)))

    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);


export default connectedComponent;

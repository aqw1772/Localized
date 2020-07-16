import { actionIdentifier, YourShareActions, AddAction } from './actions'
import { IYourShareState, Person } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count
const you = new Person(0, "This is you",)

const person1 = new Person(1, "Stacey")
person1.addItem(2, "Blender", "Kitchen", "A pretty great blender.  The lid...");

const person2 = new Person(3, "Marcos")
person2.addItem(4, "Rake", "Garden", "A pretty great rake.  The handle...");
person2.addItem(5, "Car", "Garden", "A pretty great car.  The steering wheel...");


const intialState: IYourShareState = {
    idCounter: 6, // this is the id assigned to the next object that we create
    currentUser: you,
    people: [
        person1,
        person2
    ]
}

function yourShareReducer(state: IYourShareState | undefined, action: YourShareActions): IYourShareState {
    if (state === undefined) {
        return intialState;
    }

    // let nextId = state.idCounter;
    // let listOfItems = state.items;
    switch (action.type) {
        case actionIdentifier.Add: {
            let addAction = action as AddAction;
            alert('A name was submitted: ' + addAction.name + ' type: ' + addAction.typeOfItem + ' Desc: ' + addAction.description);
            let newState: IYourShareState = { ...state };
            newState.currentUser.items.push()
            // return {
            //     items: listOfItems.concat(new ToDoItem(nextId, addAction.description)),
            //     idCounter: nextId + 1
            // };
        }
        //     case actionIdentifier.Toggle:
        //         let toggleAction = action as ToggleAction;
        //         let id = toggleAction.id;
        //         listOfItems = listOfItems.slice(0);
        //         let itemIdx = listOfItems.findIndex(item => item.id === id);
        //         if (itemIdx !== -1) {
        //             listOfItems[itemIdx].completed = !listOfItems[itemIdx].completed;
        //         }
        //         let newState = {
        //             items: listOfItems,
        //             idCounter: state.idCounter
        //         };
        //         return newState;

        default:
            return state;
    }
}

export default yourShareReducer;

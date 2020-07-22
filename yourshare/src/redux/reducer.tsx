import { YourShareActions, actionIdentifier, AddAction } from './actions'
import { IYourShareState, Person } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count
const you = new Person(0, "This is you", "508-867-5309", "98052")

const person1 = new Person(1, "Stacey", "425-123-4567", "98011")
person1.addItem(2, "Blender", "Kitchen", "A pretty great blender.  The lid...");

const person2 = new Person(3, "Marcos", "206-7654-321", "98115")
person2.addItem(4, "Rake", "Garden", "A pretty great rake.  The handle...");
person2.addItem(5, "Car", "Garden", "A pretty great car.  The steering wheel...");


export const intialState: IYourShareState = {
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

    const nextId = state.idCounter + 1;

    switch (action.type) {
        case actionIdentifier.Add: {
            let addAction = action as AddAction;
            alert('Added name: ' + addAction.name + ' phone: ' + addAction.phone + ' zip: ' + addAction.zip);

            let newState: IYourShareState = { ...state }; // this will copy the current state

            newState.currentUser = new Person(nextId, addAction.name, addAction.phone, addAction.zip);
            newState.idCounter = nextId;

            return newState;
        }

        default:
            return state;
    }
}

export default yourShareReducer;

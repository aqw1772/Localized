// Actions and their types

export enum actionIdentifier {
    Add
}

interface Action {
    type: actionIdentifier;
}

export interface AddAction extends Action {
    name: string;
    typeOfItem: string;
    description: string;
}

export function addItem(nam: string, toi: string, desc: string): AddAction {
    return {
        type: actionIdentifier.Add,
        name: nam,
        typeOfItem: toi,
        description: desc
    };
};


export type YourShareActions = AddAction
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { pages } from "./App";
import AppState  from "./App";
import { intialState } from './redux/reducer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import yourShareReducer from "./redux/reducer"

let store = createStore(yourShareReducer);


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

let container: HTMLElement;

// Executed before each test

beforeEach(() => {
    console.log(document);
    container = document.createElement('div');
    console.log(container);
    document.body.appendChild(container);
    act(() => { ReactDOM.render(<Provider store={store}><App /></Provider>, container);});
});

// Executed after each test

afterEach(() => {
    document.body.removeChild(container);
});

test('After button click on Account page the page should be BrowsePage', () => {
    const btn = container.querySelector('p.App-link');
    // ?  because it cannot be null here. Otherwise move it in the if (btn != null)
    console.log("btn " + btn?.textContent);
    if (btn != null) {
        // TODO: Uncomment
        fireEvent.click(btn);
        const header = container.querySelector('h1');
        // const { getByText } = render(<App />);
        // const linkElement = getByText(/BrowsePage/);
        // expect(linkElement).toBeInTheDocument();
        // TODO: Replace the text with the correct text
        console.log(intialState.currentUser.name);
        console.log(btn?.textContent);
        expect(header?.textContent).toBe("Welcome, " + intialState.currentUser.name+"!");
    }
});

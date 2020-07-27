import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { pages } from '../App';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { BrowsePage } from './BrowsePage';
import {BrowseScreenProps} from './BrowsePage'
import { BorrowItemPage } from './BorrowItemPage';
import yourShareReducer from "../redux/reducer"
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(yourShareReducer);


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
let changePage: (page: pages) => void;
let container: HTMLElement;
let props: App;

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

test('After clicking on "table row" button BrowsePage the page should be BorrowItem Page', () => {
    const btn = container.querySelector('ItemList');
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
        
        expect(header?.textContent).toBe("YourShare Borrow Item");
    }
});

test('After clicking on "Add Item" button BrowsePage the page should be AddItem', () => {
    const btn = container.querySelector('button.AddItem');
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
        
        expect(header?.textContent).toBe("Add Item");
    }
});

test('After clicking on "Management Community" the new page should be Manage Community', () => {
    const btn = container.querySelector('button.CommunityPage');
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
        
        expect(header?.textContent).toBe("YourShare Manage Community");
    }
});
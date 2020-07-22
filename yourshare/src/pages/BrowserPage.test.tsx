import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';


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
    act(() => { ReactDOM.render(<App />, container) });
});

// Executed after each test

afterEach(() => {
    document.body.removeChild(container);
});

test('After clicking on "table row" button BrowsePage the page should be BorrowItem Page', () => {
    const btn = container.querySelector('p.BorrowItemPage');
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
    const btn = container.querySelector('p.AddItemPage');
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
    const btn = container.querySelector('p.CommunityPage');
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
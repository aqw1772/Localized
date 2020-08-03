import React from 'react';

// SearchBar component
// A SearchBar that will search for the input using Bing's search engine

export class SearchBar extends React.Component<{}> {
    render() {
        return (
            <div className="SearchBar">
                <form id="TopSearchForm" action="https://www.bing.com/search" method="GET" target="_blank">
                    {/* */}
                    <form onSubmit={this.onKeyUp} ><input style={{borderRadius: '10px', width: '250px'}} id="searchInput" type="text" name="q" placeholder="Search" /></form>
                    
                </form>
            </div >
        )
    };

    onKeyUp = (event: React.KeyboardEvent<HTMLFormElement>) => {
        console.log("Called");
        if(event.type === "submit") {
            
            let input = (document.getElementById("searchInput") as HTMLInputElement);
            let searchTerm = input.value;
            input.value = "";

            // Submit the outer form using this 
            // In hinesight the form being submitted, is simultaneously replaced by a new form th
            // that's empty
            let form = (document.getElementById("TopSearchForm") as HTMLFormElement);
            let searchInput = (document.createElement("input") as HTMLInputElement);
            searchInput.setAttribute('type', 'text');
            searchInput.setAttribute('name', 'q');
            searchInput.value = searchTerm;
            form.appendChild(searchInput);
            form.requestSubmit();
            form.removeChild(searchInput);
            event.preventDefault();
        }
    }
}
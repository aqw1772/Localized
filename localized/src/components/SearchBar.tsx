import React from 'react';

// SearchBar component
// A SearchBar that will search for the input using Bing's search engine

export class SearchBar extends React.Component<{}> {
    render() {
        return (
            <div className="SearchBar" >
                <form action="https://www.bing.com/search" onSubmit={this.onKeyUp} method="GET" target="_blank">
                    <input id="searchInput" type="text" name="q" placeholder="Search" />
                </form>
            </div >
        )
    };

    onKeyUp = async (event: React.KeyboardEvent<HTMLFormElement>) => {
        console.log("Called");
        if(event.key === "Enter") {
        }
        let input = await (document.getElementById("searchInput") as HTMLInputElement);
        input.value = "";
    }
}
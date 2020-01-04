import React, { Component } from "react";
import Logo from './logo';
import SearchBar from "./search-bar";

class Results extends Component {

    handleSearchBarSubmit(query) {	
        console.log(query);	
    }

    render() {
        return (
            <div>
                <Logo size={50}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            </div>
        )
    }
}
export default Results;
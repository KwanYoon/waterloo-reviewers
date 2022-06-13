import React from "react";
import { useState } from "react";
import { Reviews } from "../../data/Reviews";
import "./Searchbar.styles.scss";
import SearchIcon from "./Images/search-icon.png";
import ClearIcon from "./Images/clear-icon.png";

const Searchbar = () => {
    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState(Reviews);
    const [showSearchResults, setShowSearchResults] = useState(false);

    function getMatchedResults(inputText)
    {
        // Eventually we will find results that are within Levenshtein distance to the input
        return Reviews.filter(review => {
            const reviewName = review.name.toLowerCase();
            return reviewName.includes(inputText.toLowerCase())});
    }

    function  handleChange(text) {
        setUserInput(text);
        setSearchResults(getMatchedResults(text));
    }

    return (
        <div className="main">
            <img className="search-icon" src={SearchIcon} alt=""/>
            <input className="search-text-box" value={userInput} placeholder="Find eateries here" onFocus={e => setShowSearchResults(true)} onBlur={e => setShowSearchResults(false)} onChange={e => (handleChange(e.target.value))}/>
            {
                showSearchResults ? (searchResults.length > 0 || userInput.length === 0 ? searchResults.map((post) => (
                                        <div key={post.name}>
                                            <p>{post.name + " " + post.rating}</p>
                                        </div>)) :
                                        <p>Sorry, it looks like we haven't reviewed what you're looking for!</p>
    ) : null
            }
            {
                userInput.length > 0 ? <img className="clear-icon" src={ClearIcon} alt="" onClick={() => handleChange("")}/> : null
            }
        </div>
    )
}

export default Searchbar;
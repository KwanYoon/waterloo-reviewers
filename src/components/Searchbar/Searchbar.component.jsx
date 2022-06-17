import React from "react";
import { useState } from "react";
import { Reviews } from "../../data/Reviews";
import "./Searchbar.styles.scss";
import SearchIcon from "./Images/search-icon.png";
import ClearIcon from "./Images/clear-icon.png";
import { Link } from "react-router-dom";

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

    function handleBlur() {
        setShowSearchResults(false); 
    }
    
    return (
        <div className="main">
            <img className="search-icon" src={SearchIcon} alt=""/>
            <input className="search-text-box" value={userInput} placeholder="Search restaurants, cafes, etc" onFocus={e => setShowSearchResults(true)} onBlur={e => setTimeout(handleBlur, 100)} onChange={e => (handleChange(e.target.value))}/>
            {
                showSearchResults ? (searchResults.length > 0 || userInput.length === 0 ? searchResults.map((post) => (
                                        <div className="blog-list-item" key={post.key}>
                                            <Link to={"/blogs/" + post.key }>{post.name}</Link>
                                        </div>)) :
                                        <p>Sorry, it looks like we haven't reviewed what you're looking for!</p>) : null
            }
        </div>
    )
}

export default Searchbar;
/*
{
                userInput.length > 0 ? <img className="clear-icon" src={ClearIcon} alt="" onClick={() => handleChange("")}/> : null
            }
*/
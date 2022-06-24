import React from "react";
import { useState } from "react";
import { Reviews } from "../../data/Reviews";
import "./Searchbar.styles.scss";
import SearchIcon from "./Images/search-icon.png";
import ClearIcon from "./Images/clear-icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState(Reviews);
    const [searchResultsExist, setSearchResultsExist] = useState(false);

    const onSearch = (searchItem) => {
        setUserInput(searchItem.name);

        navigate("/blogs/" + searchItem.key);
    }

    const getMatchedResults = () => {
        return Reviews.filter((item) => {
            const searchTerm = userInput.toLowerCase();
            const fullName = item.name.toLowerCase();

            return (
                searchTerm &&
                fullName.includes(searchTerm)
        )});
    }

    const handleChange = (text) => {
        setUserInput(text);
        const matchedResults = Reviews.filter((item) => {
            const searchTerm = text.toLowerCase();
            const fullName = item.name.toLowerCase();

            return (
                searchTerm.length > 0 &&
                fullName.includes(searchTerm)
        )});

        setSearchResults(matchedResults);

        if (matchedResults.length > 0) {
            setSearchResultsExist(true);
        } else {
            setSearchResultsExist(false);
        }
    }
    
    return (
        <div className="main">
            <div className="search-inner">
                <input className={searchResultsExist ? "search-text-box-results" : "search-text-box-no-results"} value={userInput} placeholder="Search restaurants, cafes, etc" onChange={e => (handleChange(e.target.value))}/>
            </div>
            <div className="dropdown">
                {getMatchedResults()
                .slice(0, 10)
                .map((item, i, {length}) => (
                    <div
                        onClick={() => onSearch(item)}
                        className={length - 1 === i ? "final-dropdown-row" : "dropdown-row"}
                        key={item.key}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Searchbar;
/*
{
                userInput.length > 0 ? <img className="clear-icon" src={ClearIcon} alt="" onClick={() => handleChange("")}/> : null
            }

            <img className="search-icon" src={SearchIcon} alt=""/>
                        {
                showSearchResults ? (searchResults.length > 0 || userInput.length === 0 ? searchResults.map((post) => (
                                        <div className="blog-list-item" key={post.key}>
                                            <Link to={"/blogs/" + post.key }>{post.name}</Link>
                                        </div>)) :
                                        <p>Sorry, it looks like we haven't reviewed what you're looking for!</p>) : null
            }
*/
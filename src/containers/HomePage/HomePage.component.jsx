import React from "react";
import Searchbar from "./../../components/Searchbar/Searchbar.component.jsx"
import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="title">Waterloo Reviewers</h1>
      <div className="searchbar">
        <Searchbar />
      </div>
      
    </div>
  );
}

export default HomePage;

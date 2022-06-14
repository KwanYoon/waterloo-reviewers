import React from "react";
import Searchbar from "./../../components/Searchbar/Searchbar.component.jsx"
import "./HomePage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Waterloo Reviewers</h1>
      <Searchbar />
    </div>
  );
}

export default HomePage;

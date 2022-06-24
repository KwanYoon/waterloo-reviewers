import React from "react";
import Searchbar from "./../../components/Searchbar/Searchbar.component.jsx"
import "./HomePage.styles.scss";
import Navbar from './../../components/Navbar/Navbar.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <h1 className="title">Waterloo Reviewers</h1>
      <Searchbar className="searchbar" />
    </div>
  );
}

export default HomePage;

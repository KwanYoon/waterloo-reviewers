import React from "react";
import Searchbar from "./../../components/Searchbar/Searchbar.component.jsx"
import "./HomePage.styles.scss";
import Map from "./../../components/Map/Map.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="title">Waterloo Reviewers</h1>
      <Searchbar className="searchbar" />
      <Map className="map"/>
    </div>
  );
}

export default HomePage;

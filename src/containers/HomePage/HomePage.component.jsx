import React from "react";
import Searchbar from "./../../components/Searchbar/Searchbar.component.jsx"
import "./HomePage.styles.scss";
import { MapContainer, TileLayer } from 'react-leaflet'
import { Reviews } from "./../../data/Reviews.js";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="title">Waterloo Reviewers</h1>
      <Searchbar className="searchbar" />
      
      <div className='map-wrap'>
        <MapContainer center={[43.48384539232072, -80.52679937827578]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          { Reviews?.map((review, i) => (
            review.location.map((r, j) => (
                <div
                    className="map-review-spot"
                    lat={Number(r.latitude)}
                    lng={Number(r.longitude)}
                >
                </div>
            ))))}
        </MapContainer>
      </div>

    </div>
  );
}

export default HomePage;

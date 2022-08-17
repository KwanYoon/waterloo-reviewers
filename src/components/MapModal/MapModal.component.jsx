import React from "react";
import "./MapModal.styles.scss";
import RestaurantImage from "./../../data/images/wendys.jpg";
import { useNavigate } from "react-router-dom";

const MapModal = ( {restaurantInfo} ) => {
    const navigate = useNavigate();

    return (
        <div className="map-modal" onClick={() => navigate("/blogs/" + restaurantInfo.key)}>
            <div className="map-modal-information">
                <h4>{restaurantInfo.name}</h4>
                <p>{restaurantInfo.address}</p>
                <p>{restaurantInfo.phoneNumber}</p>
            </div>
            
            <img className="map-modal-restaurant-image" src={RestaurantImage} alt="Restaurant" />
        </div>
    );
}

export default MapModal;
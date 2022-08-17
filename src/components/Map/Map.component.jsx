import React from 'react';
import GoogleMapReact from 'google-map-react';
import "./Map.styles.scss";
import { Reviews } from "./../../data/Reviews.js";
import { useState } from 'react';
import MapMarkerIcon from "./images/map-marker.webp";
import MapModal from "./../../components/MapModal/MapModal.component";

const Map = () => {
    const [coordinates, setCoordinates] = useState({lat: 43.48384539232072, lng: -80.52679937827578});

    const handleMouseEnter = (event) => {
        if (event.target.parentNode.classList.contains("parent--show")) {
            return;
        }
        event.target.classList.add("parent--show");
        
    }

    const handleMouseLeave = (event) => {
        event.target.classList.remove("parent--show");
    }

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDsAvs8wKyCHVuN5k-N6QA0iBRa9pDgBRo' }}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true}}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                }}
                onChildClick={''}
                >
                    { Reviews?.map((review, i) => (
                        review.location.map((r, j) => (
                            <div   
                                className="map-review-spot"
                                lat={Number(r.latitude)}
                                lng={Number(r.longitude)}
                            >
                                                                    <img src={MapMarkerIcon} alt="MapMarkerIcon" className="map-review-spot-icon"/>
                                <div className="parent" onClick={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="testing" id="child-div-toggle">
                                        <MapModal restaurantInfo={review}/>
                                    </div>
                                    
                                </div>
                                

                                
                            </div>
                        ))))}

            </GoogleMapReact>
        </div>
    );
}
//<img src={MapMarkerIcon} alt="MapMarkerIcon" className="map-review-spot-icon"/>
export default Map;
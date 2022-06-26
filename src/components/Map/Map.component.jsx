import React from 'react';
import GoogleMapReact from 'google-map-react';
import "./Map.styles.scss";
import { Reviews } from "./../../data/Reviews.js";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MapMarkerIcon from "./images/map-marker.webp";
import MapModal from "./../../components/MapModal/MapModal.component";

const Map = () => {
    const [coordinates, setCoordinates] = useState({lat: 43.48384539232072, lng: -80.52679937827578});
    const navigate = useNavigate();
    const [renderModal, setRenderModal] = useState(false);

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
                    {Reviews &&
                    Reviews.map((review, i) => (
                        review.location.map((r) => (
                            <div   
                                className='map-review-spot'
                                lat={Number(r.latitude)}
                                lng={Number(r.longitude)}
                                key={i}
                                onMouseOver={() => setRenderModal(true)}
                                onMouseLeave={() => setRenderModal(false)}
                                onClick={() => navigate("/blogs/" + review.key)}
                            >
                                { renderModal ?
                                    <MapModal />
                                    : null
                                }
                                <img src={MapMarkerIcon} className="map-review-spot-icon"/>
                            </div>
                        ))))}

            </GoogleMapReact>
        </div>
    );
}

export default Map;
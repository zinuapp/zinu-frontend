import React, { FormEvent, useState , useContext, useRef, useEffect, useCallback } from 'react';
import { BodyContent, Header } from './HomeMainStyle'

import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

 const initialPosition = { lat: -19.917299, lng: -43.934559 };

const HomeComponent: React.FC = () => {
    const [location, setLocation] = useState(initialPosition);
    console.log(process.env.REACT_APP_ACCESS_TOKEN)
    return (
        <div>
            <Header></Header>
            <BodyContent>
                <div className='content'>
                    <div className='page-map'>
                        <MapContainer
                            center={location}
                            zoom={15}
                            style={{ width: "100%", height: "100%" }}
                         >
                            <TileLayer 
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGNzZGV2cyIsImEiOiJja3dtcHc2bXUyZWR5MnZubzcxMGNmMTgzIn0.QZAK-exntAinLz5ylt8U4Q`}
                            />
                        </MapContainer>
                    </div>
                </div>
            </BodyContent>
        </div>
    )
}

export default HomeComponent

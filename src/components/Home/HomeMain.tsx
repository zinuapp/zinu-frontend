import React, { FormEvent, useState , useContext, useRef, useEffect, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';

import { BodyContent, Header } from './HomeMainStyle'

import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import carIcon from '../../assets/car.svg';
import personIcon from '../../assets/user.svg';

 const initialPosition = { lat: -19.917299, lng: -43.934559 };
 const acessToken = 'access_token=pk.eyJ1IjoibGNzZGV2cyIsImEiOiJja3dtcHc2bXUyZWR5MnZubzcxMGNmMTgzIn0.QZAK-exntAinLz5ylt8U4Q';

const mapCarIcon = Leaflet.icon({
    iconUrl: carIcon,
    iconSize: [25, 35],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

const mapUserIcon = Leaflet.icon({
    iconUrl: personIcon,
    iconSize: [20, 30],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const HomeComponent: React.FC = () => {
    const [location, setLocation] = useState(initialPosition);
    const [carOne, setCarOne]  = useState([]);
    const [carTwo, setCarTwo]  = useState([]);
    const [carThree, setCarThree]  = useState([]);
    const [carFour, setCarFour]  = useState([]);

    const { lastMessage, sendMessage } = useWebSocket('wss://zinu-passenger-ikwha.ondigitalocean.app/ws/passenger', {
        onOpen: () => console.log(`Connected`),
        onMessage: () => {
          
            sendMessage("GET_LOCATION$CAR_1")
           sendMessage("GET_LOCATION$CAR_2")
           sendMessage("GET_LOCATION$CAR_3")
           sendMessage("GET_LOCATION$CAR_4")

            if (lastMessage) {
                let data = lastMessage.data;

                if(data.indexOf('CAR_1$') !== -1 ){
                     let carPosition  = data.split('$')
                     setCarOne(carPosition)
                }

                 if(data.indexOf('CAR_2$') !== -1 ){
                     let carPosition  = data.split('$')
                     setCarTwo(carPosition)
                }

                 if(data.indexOf('CAR_3$') !== -1 ){
                     let carPosition  = data.split('$')
                     setCarThree(carPosition)
                }

                 if(data.indexOf('CAR_4$') !== -1 ){
                     let carPosition  = data.split('$')
                     setCarFour(carPosition)
                }
            }
        },
           onError: (event) => { console.error(event); },
           shouldReconnect: (closeEvent) => true,
           reconnectInterval: 3000
    });

    return (
        <div>
            <Header></Header>
            <BodyContent>
                <div>
                    <div className='page-map'>
                        <MapContainer
                            center={location}
                            zoom={15}
                            style={{ width: "100%", height: "100%" }}
                         >
                            <TileLayer 
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?${acessToken}`}
                            />

                            { initialPosition && (
                                <Marker
                                    icon={mapUserIcon}
                                    position={[initialPosition.lat, initialPosition.lng]}
                                ></Marker>
                            )}

                            {carOne && carOne.length > 0 && (
                                <Marker
                                    icon={mapCarIcon}
                                    position={[carOne[1], carOne[2]]}
                                ></Marker>
                            )}

                            {carTwo && carTwo.length > 0 && (
                                <Marker
                                    icon={mapCarIcon}
                                    position={[carTwo[1], carTwo[2]]}
                                ></Marker>
                            )}

                            {carThree && carThree.length > 0 && (
                                <Marker
                                    icon={mapCarIcon}
                                    position={[carThree[1], carThree[2]]}
                                ></Marker>
                            )}

                            {carFour && carFour.length > 0 && (
                                <Marker
                                    icon={mapCarIcon}
                                    position={[carFour[1],carFour[2]]}
                                ></Marker>
                            )}

                        </MapContainer>
                    </div>
                </div>
            </BodyContent>
        </div>
    )
}

export default HomeComponent

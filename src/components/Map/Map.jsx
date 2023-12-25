import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import './Map.scss'
import { Link } from "react-router-dom";
import axios from "axios"


function Map ({toggleMain}) {
  console.log(toggleMain)
  const mapRef = useRef(null);
  const latitude = 49.249814;
  const longitude = -123.1217199;
  const URL = "http://localhost:8080"
  const [posts, setPosts] = useState([])
  const [mapStyle, setMapStyle] = useState("map")

  function toggleModal () {
    mapStyle === "map" ? setMapStyle("map map--modal-active") : setMapStyle("map")
  }

    async function getPosts () {
      const {data} = await axios.get(`${URL}/posts`)
      console.log(data)
      setPosts(data)
    }

    useEffect(()=>{getPosts()},[])

    const customIcon = new L.Icon({
      iconUrl: '../../src/assets/images/yellow.png',
      iconSize: [18, 18], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32], 
    });
  
    return ( 
      <>
      {/* <div className="modal">
        <button className="map__post" id="test" onClick={toggleModal}>togglemodal</button>
      </div> */}
      <section className={mapStyle}>
        <MapContainer className="leaf" center={[latitude, longitude]} zoom={13} zoomControl={false} ref={mapRef} 
        attributionControl={false}  style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            maxZoom= {20}
            subdomains={['mt1','mt2','mt3']}
            />

            {posts.map((comment,index) => {
              return (
                <Marker key={index} position={[comment.lat, comment.lng]} icon={customIcon}>
                    <Popup className="map__popup">
                        {comment.comment}
                        <section className="map__pop--links">
                          <div>BACK TO REALITY</div>
                          <button onClick={toggleMain}>toggle</button>
                          {/* <Link to={'/profile'}>FOLOW THAT THOUGHT</Link> */}
                        </section>
                    </Popup>
                </Marker>
              )
            })}

        </MapContainer>
      </section>
        <div className="map__post">
        <Link className="map__link" to={'/addcomment'}>Map Your Mind</Link>
        </div>
      </>
    );
  };
  
  export default Map;
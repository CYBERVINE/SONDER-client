import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import './Map.scss'



function Map ({getPosts, posts, giveCoords, coords, toggleMain, toggleModal, mapMove}) {
  const params = useParams()
  const mapRef = useRef(null);
  const latitude = 49.249814;
  const longitude = -123.1217199;

  const slide = mapMove !== "" ? "map__post--slide" : ""

    if(!params.id) { useEffect(()=>{getPosts()},[]),
                     useEffect(()=>{giveCoords()},[])
        }

    const customIcon = new L.Icon({
      iconUrl: '../../src/assets/images/yellow.png',
      iconSize: [18, 18], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32], 
    });
  
    return ( 
      <>

      <section className="map">
        <MapContainer className="leaf" center={[latitude, longitude]} zoom={13} zoomControl={false} ref={mapRef} 
        attributionControl={false}  style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            maxZoom= {20}
            subdomains={['mt1','mt2','mt3']}
            />

            {posts && posts.map((comment,index) => {
              return (
                <Marker key={index} position={[comment.lat, comment.lng]} icon={customIcon}>
                    <Popup className="map__popup">
                        {comment.comment}
                        <section className="map__pop--links">
                          <button onClick={toggleMain}>FOLLOW THAT THOUGHT!</button>
                        </section>
                    </Popup>
                </Marker>
              )
            })}

        </MapContainer>
      </section>

        <div onClick={toggleModal} className={!params.id? `map__post ${slide}` : "map__post map__post--shrink"}>
          <p>
          Map it
          </p>
        </div>
      
      </>
    );
  };
  
  export default Map;
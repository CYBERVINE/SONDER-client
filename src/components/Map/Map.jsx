import React, { useRef, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { useParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import './Map.scss'



function Map ({getPosts, posts, giveCoords, coords, toggleMain, toggleModal, modalActive, mapMove}) {
  const params = useParams()
  const mapRef = useRef(null);
  const latitude = 49.249814;
  const longitude = -123.1217199;
  
  const [range, setRange] = useState(0.1)

  const slide = mapMove !== "" ? "map__nav-button--slide" : ""

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

            {posts && posts.map((comment) => {
              return (
                <Marker key={comment.id} position={[comment.lat, comment.lng]} icon={customIcon}>
                    <Popup>
                        <section className="map__popup">
                          {(Math.abs(comment.lat - coords.lat) < range) && (Math.abs(comment.lng - coords.lng) < range) ? 
                          <>
                          <p className="map__comment">{comment.comment}</p> 
                          <button className="map__link" onClick={()=>toggleMain(comment.user_id)}>FOLLOW THAT THOUGHT!</button>
                          </>
                          : 
                          <p
                            className="map__comment">You're not close enough yet to see the thoughts this place inspired.</p>}
                      </section>
                    </Popup>
                </Marker>
              )
            })}

        </MapContainer>


        <footer className="map__nav">

          <section className="map__precision"> 
              <h3>Set Precison</h3>
          {(modalActive === "" ) &&
            <>
              <button className="map__precision-button" onClick={()=>setRange(0.001)}>High</button>
              <button className="map__precision-button" onClick={()=>setRange(0.01)}>Medium</button>
              <button className="map__precision-button" onClick={()=>setRange(0.1)}>Low</button>
              <p>{range}</p>
            </>}
          </section>

          <Link to={'/profile/4'} className="map__nav-button">
          View Profile
          </Link>
        

          <div onClick={toggleModal} className={!params.id? `map__nav-button ${slide}` : "map__post map__post--shrink"}>
        
              {modalActive === "" ? "Map it" : "Scrap it"} 

          </div>
        </footer>
      </section>
      </>
    );
  };
  
  export default Map;
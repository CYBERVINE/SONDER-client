import React, { useRef, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { useParams } from "react-router";
import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import './Map.scss'



function Map ({getPosts, posts, giveCoords, coords, toggleMain, toggleModal, modalActive, decodedToken}) {
  const params = useParams()
  const mapRef = useRef(null);
  const [range, setRange] = useState(0.1)

  // const slide = mapMove !== "" ? "map__nav-button--slide" : ""

    if(!params.id) { useEffect(()=>{getPosts()},[posts.length]),
                     useEffect(()=>{giveCoords()},[])
        }

    const customIcon = new L.Icon({
      iconUrl: '../../src/assets/images/giphy.gif',
      iconSize: [40, 40], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32], 
      className: "map__marker"
    });
  
    return ( 
      <>
    { coords.lat &&
      <section className="map">

    
        <MapContainer className="leaf" center={[coords.lat, coords.lng]} zoom={15} zoomControl={false} ref={mapRef} 
        attributionControl={false}  style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            maxZoom= {20}
            subdomains={['mt1','mt2','mt3']}
            />
            <MarkerClusterGroup
             maxClusterRadius={23} 
             >
            {posts && posts.map((comment) => {
              return (
                <Marker key={comment.id} position={[comment.lat, comment.lng]} icon={customIcon} className="map__marker">
                    <Popup>
                        <section className="map__popup">
                          {(Math.abs(comment.lat - coords.lat) < range) && (Math.abs(comment.lng - coords.lng) < range) ? 
                          <>
                          <p className="map__comment">{comment.comment}</p> 
                          <button className="map__link" onClick={()=>toggleMain(comment.user_id)}>FOLLOW THIS THOUGHT!</button>
                          </>
                          : 
                          <p
                          className="map__comment">You're not close enough yet to see the thoughts this place inspired.</p>}
                      </section>
                    </Popup>
                </Marker>
              )
            })}
            </MarkerClusterGroup>

        </MapContainer>
        
      

          <footer className="map__nav">

            <section className="map__precision"> 
                <p className="map__precision-title" >Set Precison</p>
            {(modalActive === "" ) &&
              <>
                <button className="map__precision-button" onClick={()=>setRange(0.001)}>High</button>
                <button className="map__precision-button" onClick={()=>setRange(0.01)}>Medium</button>
                <button className="map__precision-button" onClick={()=>setRange(0.1)}>Low</button>
                <p>{range}</p>
              </>}
            </section>

              {(sessionStorage.getItem("authToken") && !params.id) ?
                  <p onClick={()=>toggleMain(decodedToken?.id)} className="map__nav-button">
                  View Profile
                  </p> :
                  <Link to={"/signup"} className="map__nav-button">Create Profile</Link>
                }
          

            <p onClick={toggleModal} 
            // className={!params.id? `map__nav-button ${slide}` : "map__post map__post--shrink"}
            className={`map__nav-button ${modalActive === "" ? "" : "map__nav-button--collapse"}`}
            >
                {modalActive === "" ? "make post" : "ERASE"}
            </p>
          </footer>
      </section>
        }
      </>
    );
  };
  
  export default Map;
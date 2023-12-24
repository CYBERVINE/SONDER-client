import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Map.scss'
import { Link } from "react-router-dom";
import axios from "axios"


function Map () {
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

    const comments = [
      { lat: 49.2827, lng: -123.1207, comment: "yes" }, // Vancouver Art Gallery
      { lat: 49.2840, lng: -123.1171, comment: "no"  }, // Robson Square
      { lat: 49.2819, lng: -123.1208, comment: "wow"  }, // Pacific Centre Mall
      { lat: 49.2818, lng: -123.1096, comment: "i"  }, // Canada Place
      { lat: 49.2777, lng: -123.1216, comment: "smart"  }  // BC Place Stadium
    ]

    useEffect(()=>{getPosts()},[])
  
    return ( 
      <>
      <div className="modal">
        <button className="map__post" id="test" onClick={toggleModal}>togglemodal</button>
      </div>
      <section className={mapStyle}>
        <MapContainer className="leaf" center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "95vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {posts.map((comment,index) => {
              return (
                <Marker key={index} position={[comment.lat, comment.lng]}>
                    <Popup>
                        <Link to={'/profile'}>
                          {comment.comment}
                        </Link>
                    </Popup>
                </Marker>
              )
            })}

        </MapContainer>
      </section>
      <div className="map__footer">

      <Link to={'/addcomment'} className="map__post" onClick={toggleModal}>Map Your Mind</Link>
      </div>
      </>
    );
  };
  
  export default Map;
import './Profile.scss'
import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Profile () {  
    const mapRef = useRef(null);
    const profile = {
        name: "Beth Vanderhoof"
    }

    const [profileFade, setprofileFade] = useState("")
    const navigate = useNavigate()
    const promos = [1,2,3,4,5]
    const latitude = 49.249814;
    const longitude = -123.1217199;

    function backToReality () {
        setprofileFade("profile--fade")
        setTimeout(() => {
            navigate("/map")
          }, 300);
    }
    
    return(
        <section className='wrapper'>
            <main className={`profile ${profileFade}`}>
                <div className='profile__banner'>
                    <img className='profile__avatar' src="../src/assets/images/avatar.jpg" alt="" />
                    <h2 className='profile__name'>{profile.name}</h2>
                </div>
                <div className='profile__map'>
                    <MapContainer className="profile_leaf" center={[latitude, longitude]} zoom={13} zoomControl={false} attributionControl={false} ref={mapRef} style={{height: "30vh", width: "100%"}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                            maxZoom= {20}
                            subdomains={['mt1','mt2','mt3']}
                            />
                    </MapContainer>
                </div>
                <ul className='profile__feed'>
                    {promos.map(promo=>{
                        return <li className='profile__entry' key={promo}>promo item</li>
                    })}
                </ul>
                {/* <form className='profile__form' action="submit">
                    <label htmlFor="promo">What's your next promo?</label>
                    <input type="text" />
                    <button type="submit">Post your Promo</button>
                </form> */}
                <div className='profile__return-container'>

                <div className='profile__return' onClick={backToReality}>Back To Reality</div>
                </div>
            </main>
        </section>
    )
}

export default Profile
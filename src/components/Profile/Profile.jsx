import './Profile.scss'
import React, { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios"


function Profile () {  
    const mapRef = useRef(null);
    const params = useParams()

    const [user, setUser] = useState({})
    const [promos, setPromos] = useState([])

    const [profileFade, setprofileFade] = useState("")
    const navigate = useNavigate()
    const latitude = 49.249814;
    const longitude = -123.1217199;

    function backToReality () {
        setprofileFade("profile--fade")
        setTimeout(() => {
            navigate("/map")
          }, 300);
    }

    async function getProfile(params){
        try{
            const user = await axios.get(`http://localhost:8080/users/${params.id}`)
            const promos = await axios.get(`http://localhost:8080/promos/${params.id}`)
            console.log(promos)
            setUser(user.data)
            setPromos(promos.data)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{getProfile(params)},[user.username])
    
    return(
        <section className='wrapper'>
            <main className={`profile ${profileFade}`}>
                <div className='profile__banner'>
                    <img className='profile__avatar' src="../src/assets/images/avatar.jpg" alt="" />
                    <h2 className='profile__name'>{user.username}</h2>
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
                        return <li className='profile__entry' key={promo.id}>{promo.promo}</li>
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
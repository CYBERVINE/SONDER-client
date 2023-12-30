import './Profile.scss'
import React, { useRef, useState, useEffect } from "react";
import  { Link }from 'react-router-dom'
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
    const [posts, setPosts] = useState([])
    const [menu, setMenu] = useState(false)
    const [publicView, setPublicView] = useState(true)

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

    console.log(menu)

    async function getProfile(params){
        try{
            const user = await axios.get(`http://localhost:8080/users/${params.id}`)
            const promos = await axios.get(`http://localhost:8080/promos/${params.id}`)
            const posts = await axios.get(`http://localhost:8080/posts/${params.id}`)
            setUser(user.data)
            setPromos(promos.data)
            setPosts(posts.data)
            console.log(posts.data)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{getProfile(params)},[user.username])
    
    return(
        <section className='wrapper'>
            <main onClick={()=>{if(menu)setMenu(false)}}className={`profile ${profileFade}`}>
                <img onClick={()=>{menu === false ? setMenu(true) : setMenu(false)}} className="profile__menu"  src="../src/assets/images/menu.png" alt="menu" />
                <div className={`profile__dropdown ${menu === false ? "" : "profile__dropdown--active"}`}>
                    <Link to={"/edit"} className='profile__dropdown--option'>Edit Profile</Link>
                    <p onClick={()=>{publicView === false ? setPublicView(true) : setPublicView(false)}} className='profile__dropdown--option'>View Note Pad</p>
                </div>
                <div className='profile__banner'>
                {user.avatar ? <img className='profile__avatar'  src={user.avatar} alt="avatar" /> : <img className='profile__avatar' src="../src/assets/images/smile.jpg" alt="" /> }
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
                            { posts && posts.map((comment) => {
                                return (
                                    <Marker key={comment.id} position={[comment.lat, comment.lng]} >
                                        
                                    </Marker>
                            )})}
                    </MapContainer>
                </div>
                <ul className='profile__feed'>
                    {publicView ? promos.map(promo=>{
                        return <a key={promo.id} href={promo.link ? promo.link : "https://www.facebook.com"}>
                            <li className='profile__entry' >
                            {promo.promo}
                            </li>
                            </a>
                    }) : posts.map(post=> {
                        return <li key={post.id} className='profile__entry' >
                                {post.comment}
                                </li>
                    })}
                </ul>
                <div className='profile__return-container'>

                <div className='profile__return' onClick={backToReality}>Back To Reality</div>
                </div>
            </main>
        </section>
    )
}

export default Profile
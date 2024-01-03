import './Profile.scss'
import React, { useRef, useState, useEffect } from "react";
import  { Link }from 'react-router-dom'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios"



function Profile ({decodedToken, getLoginId}) {  
    const mapRef = useRef(null);
    const params = useParams()
    const id = params.id


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

    async function getProfile(params){
        try{
            const user = await axios.get(`http://localhost:8080/users/${params.id}`)
            const promos = await axios.get(`http://localhost:8080/promos/${params.id}`)
            const posts = await axios.get(`http://localhost:8080/posts/${params.id}`)
            setUser(user.data)
            setPromos(promos.data)
            setPosts(posts.data)
        }catch(err){
            console.error(err)
        }
    }

    async function deletePromo(promoId, params){
        const {data} = await axios.delete(`http://localhost:8080/promos/${promoId}`)
    }

    useEffect(()=>{ getProfile(params)},[user.username])
    useEffect(()=>{ getLoginId()},[])
    
    return(

            <main onClick={()=>{if(menu)setMenu(false)}}className={`profile ${profileFade}`}>
                {(decodedToken?.id === user.id) && 
                <>
                <img onClick={()=>{menu === false ? setMenu(true) : setMenu(false)}} className="profile__menu"  src="../src/assets/images/menu.png" alt="menu" />
                <div className={`profile__dropdown ${menu === false ? "" : "profile__dropdown--active"}`}>
                    <Link to={"/edit"} className='profile__dropdown--option'>Edit Profile</Link>
                    <p onClick={()=>{publicView === false ? setPublicView(true) : setPublicView(false)}} className='profile__dropdown--option'> {publicView ? "View Note Pad" : "View Promos"}</p>
                </div>
                </>
                }
                <div className='profile__banner'>
                {user.avatar ? <img className='profile__avatar'  src={user.avatar} alt="avatar" /> : <img className='profile__avatar' src="../src/assets/images/anonymous.png" alt="avatar" /> }
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
                    {publicView ? <h2 className='profile__title'>{`${user.description}`}</h2> : <h2  className='profile__title'>Your Note Pad</h2>}
                <ul className='profile__feed'>
                    {(publicView && promos.length === 0) && <li className='profile__entry profile__entry--empty'>Nothing to promote yet!</li> }
                    {(!publicView && posts.length === 0) && <li className='profile__entry profile__entry--empty'>You've haven't mapped your inner monologue yet, so get out the and get inspiring!</li> }
                    {publicView ? promos.map(promo=>{
                        return (
                            <li  key={promo.id} className='profile__entry' >
                            <a className="profile__entry--link" href={promo.link ? promo.link : "http://localhost:5173/map"}>
                            {promo.promo}
                            </a>
                        {(decodedToken?.id === user.id) && <img onClick={()=>deletePromo(promo.id)} className="profile__delete" src="../../src/assets/images/delete.svg" alt="delete" />}
                        </li>
                            )
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

    )
}

export default Profile
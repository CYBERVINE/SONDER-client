import Map from "../../components/Map/Map"
import AddComment from '../../components/AddComment/AddComment'
import './MapPage.scss'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

function MapPage ({giveCoords, coords}) {

  const URL = "http://localhost:8080"
  const [posts, setPosts] = useState([])
  const [modalActive, setModalActive] = useState("")
  const [mapMove, setMapMove] = useState("")
  const navigate = useNavigate()

  function toggleMain (userId) { 
    setMapMove("map-div--out")
    setTimeout(() => {
      navigate(`/profile/${userId}`)
    }, 1400);
  }

  function toggleModal () {
    modalActive === "" ? setModalActive("modal-div--active") : setModalActive("")
  }

  async function getPosts () {
    const {data} = await axios.get(`${URL}/posts`)
    setPosts(data)
  }

  useEffect(()=>toggleModal,[])

  return (
    <section className="main-page">
      <div className= {`modal-div ${modalActive}`} >
        <AddComment  getPosts={getPosts} giveCoords={giveCoords} coords={coords} toggleModal={toggleModal}/>
      </div>
      <div className={`map-div ${mapMove}`}>
        <Map getPosts={getPosts} posts={posts} giveCoords={giveCoords}  coords={coords} toggleMain={toggleMain} toggleModal={toggleModal} mapMove={mapMove}/>
      </div>
    </section>
  )
}

export default MapPage
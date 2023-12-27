import Map from "../../components/Map/Map"
import AddComment from '../../components/AddComment/AddComment'
import './MainPage.scss'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

function MainPage ({giveCoords, coords}) {
  const [modalActive, setModalActive] = useState("")
  const [mapMove, setMapMove] = useState("")
  const navigate = useNavigate()

  function toggleMain () { 
    setMapMove("map-div--out")
    setTimeout(() => {
      navigate("/profile/4")
    }, 1000);
  }

  function toggleModal () {
    modalActive === "" ? setModalActive("modal-div--active") : setModalActive("")
    console.log("go")
  }

  useEffect(()=>toggleModal,[])

  return (
    <section className="main-page">
      <div className= {`modal-div ${modalActive}`} >
        <AddComment  giveCoords={giveCoords} coords={coords} toggleModal={toggleModal}/>
      </div>
      <div className={`map-div ${mapMove}`}>
        <Map toggleMain={toggleMain} toggleModal={toggleModal}/>
      </div>
    </section>
  )
}

export default MainPage
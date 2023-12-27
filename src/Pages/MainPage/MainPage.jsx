import Map from "../../components/Map/Map"
import Profile from '../../components/Profile/Profile'
import AddComment from '../../components/AddComment/AddComment'
import './MainPage.scss'
import { useState, useEffect } from "react"

function MainPage ({giveCoords, coords}) {
  const [modalActive, setModalActive] = useState("")
  const [mapMove, setMapMove] = useState("")
  // const [profileMove, setProfileMove] = useState("")
  // const [mapActive, setMapActive] = useState("main-page--active")
  // const [profileActive, setProfileActive] = useState("")

  function toggleMain () { //use animation-fill-mode // use animation reverse
    setMapMove("map-div--out")
    // if (mapMove === ""){ 
    //   setProfileMove("profile-in")
    //   setMapActive("")
    //   setProfileActive("main-page--active")
    // } else {
    //   mapMove === "map-div--out" ? setMapMove("map-div--in") : setMapMove("map-div-out")
    //   profileMove === "profile-div--in" ? setProfileMove("profile-div--out") : setProfileMove("profile-div--in")
    //   mapActive === "main-page--active" ? (setMapActive("main-page--deactivate"), setProfileActive("main-page--active"))
    //                                     : (setMapActive("main-page--activate"), setProfileActive("main-page--deactivate"))
    // }
    
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
      {/* <div className={`profile-div ${profileMove} ${profileActive}`}>
        <Profile toggleMain={toggleMain}/>
      </div> */}
    </section>
  )
}

export default MainPage
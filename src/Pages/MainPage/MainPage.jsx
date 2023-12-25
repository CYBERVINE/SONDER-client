import Map from "../../components/Map/Map"
import Profile from '../../components/Profile/Profile'
import './MainPage.scss'
import { useState } from "react"

function MainPage () {
  const [mapMove, setMapMove] = useState("")
  const [profileMove, setProfileMove] = useState("")
  const [mapActive, setMapActive] = useState("main-page--active")
  const [profileActive, setProfileActive] = useState("")

  function toggleMain () {
    if (mapMove === ""){
      setMapMove("map-out")
      setProfileMove("profile-in")
      setMapActive("")
      setProfileActive("main-page--active")
    } else {
      mapMove === "map-out" ? setMapMove("map-in") : setMapMove("map-out")
      profileMove === "profile-in" ? setProfileMove("profile-out") : setProfileMove("profile-in")
      mapActive === "main-page--active" ? (setMapActive("main-page--deactivate"), setProfileActive("main-page--active"))
                                        : (setMapActive("main-page--activate"), setProfileActive("main-page--deactivate"))
    }
    
  }


  return (
    <ssection className="main-page">
      <div className={`map-div ${mapMove} ${mapActive}`}>
        <Map toggleMain={toggleMain}/>
      </div>
      <div className={`profile-div ${profileMove} ${profileActive}`}>
        <Profile toggleMain={toggleMain}/>
      </div>
    </ssection>
  )
}

export default MainPage
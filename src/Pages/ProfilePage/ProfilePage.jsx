import Profile from '../../components/Profile/Profile'
import Map from '../../components/Map/Map'
function ProfilePage ({giveCoords, coords}) {
  return (
    <>
    <Map/>
    <Profile giveCoords={giveCoords} coords={coords}/>
    </>
  )
}

export default ProfilePage
import Profile from '../../components/Profile/Profile'

function ProfilePage ({giveCoords, coords}) {
  return (
    <Profile giveCoords={giveCoords} coords={coords}/>
  )
}

export default ProfilePage
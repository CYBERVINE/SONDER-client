import Profile from '../../components/Profile/Profile'
import Map from '../../components/Map/Map'
import './ProfilePage.scss'
function ProfilePage ({giveCoords, coords}) {

  
  
  return (
    <section className='profile-page'>
    <div className="profile-page__map">
      <Map />
    </div>
    <div className='profile-page__profile'>
      <Profile giveCoords={giveCoords} coords={coords}/>
    </div>
    </section>
  )
}

export default ProfilePage
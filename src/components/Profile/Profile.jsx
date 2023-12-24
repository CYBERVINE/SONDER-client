import './Profile.scss'
import { Link } from 'react-router-dom'

function Profile ({giveCoords, coords}) {  
    
    return(
        <main className="profile">
            <h1>Profile</h1>
             <h1>get your coords</h1>  
             
             <p>Your latitude is {coords.lat} and your longitude is {coords.lng}</p>
            
            <button onClick={()=>giveCoords()}>givelatlong</button>
            <Link to={'/'}>landingpage</Link>
        </main>
    )
}

export default Profile
import './Profile.scss'

function Profile ({giveCoords, coords}) {  
    return(
        <main className="profile">
            <h1>Profile</h1>
            <p>Your latitude is {coords.latitude} and your longitude is {coords.longitude}</p>
            <button onClick={giveCoords}>givelatlong</button>   
        </main>
    )
}

export default Profile
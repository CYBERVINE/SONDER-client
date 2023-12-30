import './styles/global.scss'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { useState } from 'react'

import IndexPage from './Pages/IndexPage/IndexPage'
import SignupPage from './Pages/SignupPage/SignupPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import EditProfilePage from './Pages/EditProfilePage/EditProfilePage'
import MapPage from './Pages/MapPage/MapPage'


function App() {

  const [coords, setCoords] = useState({})

  function giveCoords (){
    navigator.geolocation.getCurrentPosition(success)
    function success (pos){
      setCoords({
          lat : pos.coords.latitude,
          lng: pos.coords.longitude
      })
    }
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
        <Route path='/map' element={<MapPage giveCoords={giveCoords} coords={coords}/>}/>
        <Route path='/edit' element={<EditProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

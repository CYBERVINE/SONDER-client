import './styles/global.scss'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { useState } from 'react'

import IndexPage from './Pages/IndexPage/IndexPage'
import SignupPage from './Pages/SignupPage/SignupPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import MainPage from './Pages/MainPage/MainPage'
import AddComment from './components/AddComment/AddComment'


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
        <Route path='/profile' element={<ProfilePage giveCoords={giveCoords} coords={coords}/>}/>
        <Route path='/map' element={<MainPage/>}/>
        <Route path='/addcomment' element={<AddComment giveCoords={giveCoords} coords={coords}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

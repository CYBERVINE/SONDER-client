import './styles/global.scss'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { useState } from 'react'

import IndexPage from './Pages/IndexPage/IndexPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import MapPage from './Pages/MapPage/MapPage'
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
        <Route path='/profile' element={<ProfilePage giveCoords={giveCoords} coords={coords}/>}/>
        <Route path='/map' element={<MapPage/>}/>
        <Route path='/addcomment' element={<AddComment giveCoords={giveCoords} coords={coords}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './AddComment.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const URL = "http://localhost:8080"


function CommentsModal({giveCoords, coords}){

  const backgrounds = [
    ""
  ]

  const [background, setBackgound] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    giveCoords()
  },[])

  function handleSubmit (e) {
    e.preventDefault()
    console.log(coords)

    try{
      const {data} = axios.post(`${URL}/posts`,
      {
        lat: coords.lat,
        lng: coords.lng,
        comment: e.target.comment.value
      })
    } catch (err) {
      console.error(err)
    }
    
    navigate('/map')
  }
  
  return(
    <section className='add-comment'>
        <form className='add-comment__form' action="submit" onSubmit={handleSubmit}>
          <label  className='add-comment__label' htmlFor="comment">Inspired?</label>
          <textarea className='add-comment__comment' type="text" rows="7"/>
          <button className='add-comment__submit' type="submit">Map your mind</button>
        </form>
        <button className='add-comment__set-background'>new background</button>
    </section>
  )
}

export default CommentsModal
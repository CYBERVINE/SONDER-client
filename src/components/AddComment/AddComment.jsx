import './AddComment.scss'
import { useEffect } from 'react'
import axios from "axios"
const URL = "http://localhost:8080"


function CommentsModal({giveCoords, coords}){

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
    
  }
  
  return(
    <section >
        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="comment">your comment</label>
          <input type="text" name="comment" />
          <button type="submit">Mark your mind</button>
        </form>
    </section>
  )
}

export default CommentsModal
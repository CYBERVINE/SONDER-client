import './AddComment.scss'
import { useEffect } from 'react'

function CommentsModal({giveCoords, coords}){

  useEffect(()=>{
    giveCoords()

  },[])

  function handleSubmit (e) {
    e.preventDefault()
    console.log(coords)
    
  }
  

  return(
    <section >
        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="comment">your comment</label>
          <input type="text" name="comment" />
          <button type="submit">Mark y o ur mind</button>

        </form>
    </section>
  )
}

export default CommentsModal
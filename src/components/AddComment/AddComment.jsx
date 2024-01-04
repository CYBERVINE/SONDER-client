import './AddComment.scss'
import axios from "axios"
const URL = import.meta.env.VITE_BASE_URL


function CommentsModal({getPosts, coords, toggleModal, decodedToken}){

  function handleSubmit (e) {
    e.preventDefault()
    async function post () {
      try{
        const {data} = await axios.post(`${URL}/posts`,
        {
          lat: coords.lat,
          lng: coords.lng,
          comment: e.target.comment.value,
          user_id: decodedToken.id
        })

      } catch (err) {
        console.error(err)
      }
    }
    post()
    getPosts()
    toggleModal()
    e.target.comment.value = ''
  }

  // const[file, setFile] = useState()
  // async function upload () {
  // const formData = new FormData()
  // formData.append('file', file)
  // await axios.post(`${URL}/users/${decodedToken.id}/edit`,formData)
// }

  
  return(
    <section >
        <form className='add-comment__form' action="submit" onSubmit={handleSubmit}>
          <label  className='add-comment__label' htmlFor="comment">Inspired?</label>
          <textarea className='add-comment__comment' type="text" name="comment"rows="7"/>
          <button className='add-comment__submit' type="submit">Map your mind</button>
        </form>
    </section>
  )
}

export default CommentsModal
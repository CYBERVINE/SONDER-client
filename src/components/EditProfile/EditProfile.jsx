import './EditProfile.scss'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
const URL = import.meta.env.VITE_BASE_URL

function EditProfile ({getLoginId, decodedToken}) {

  const [userDetails, setUserDetails] = useState({})

  async function getUserDetails () {
    setTimeout(1000)
    const {data} = await axios.get(`${URL}/users/${decodedToken.id}/edit`)
    setUserDetails(data)
  }

  function handleEdit (e) {
    upload()
    e.preventDefault()
    const form = e.target
    async function editUser () {
      const { data } = await axios.post(`${URL}/users/${decodedToken.id}/edit`,
      {
        username: form.username.value,
      })
    }
    editUser()
    getUserDetails ()
  }

  function handlePromo(e) {
    e.preventDefault()
    const form = e.target
    async function makePromo () {
      const { data } = await axios.post(`${URL}/promos/${decodedToken.id}`,
      {
        promo: form.promo.value,
        link: form.link.value,
        user_id: decodedToken.id
      })
      
      form.promo.value = ""
      form.link.value = ""
    }

    makePromo()
  }

  useEffect(()=>{getUserDetails()},[decodedToken.id, userDetails.avatar])
  useEffect(()=>{getLoginId()},[])

  const[file, setFile] = useState()
    async function upload () {
    const formData = new FormData()
    formData.append('file', file)
    await axios.post(`${URL}/users/${decodedToken.id}/edit`,formData)
  }

  return (

    <main className='edit'>
      <div className='edit__wrapper'>
      <form className='edit__form' action="submit" onSubmit={handleEdit}>
        <h2 className='edit__heading'>EDIT USER INFO</h2> 

        <section className='edit__profile'>
          <img className='edit__avatar' src={userDetails.avatar} alt="" />
          <div className='edit__profile--text'>
            <label className='edit__label' htmlFor="username">Edit username here:</label>  
{          userDetails.username && <input className='edit__input edit__input--username' type="text" name="username" id="username" defaultValue={`${userDetails.username}`} /> }            <label className='edit__avatar--upload'  htmlFor="avatar">Upload a new avatar
            <input type="file" onChange={(e) => setFile(e.target.files[0])} name="avatar" id="avatar" />
            </label>
            <button className='edit__button' type="submit">Update your profile</button>
          </div>
        </section>
        <Link to={`/profile/${decodedToken.id}`}><h2 className='edit__heading'>View Profile</h2> </Link>
      </form>
      <form className='edit__form' action="submit" onSubmit={handlePromo}>
      <h2 className='edit__heading'>ADD NEW PROMO</h2>
            <label className='edit__label' htmlFor="promo">What do you want to promote?</label>
            <textarea className='edit__textarea' type="text" name='promo' rows="10" />
            <label className='edit__label' htmlFor="links">Add the link!</label>
            <input className='edit__input' type="text" name='link' />
            <button className='edit__button' type="submit">Post your Promo</button>
      </form>

      </div>
    </main>

  )
}

export default EditProfile
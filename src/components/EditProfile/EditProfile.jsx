import './EditProfile.scss'
import { Link } from 'react-router-dom'

function EditProfile () {
  return (

    <main className='edit'>
      <div className='edit__wrapper'>
      <form className='edit__form' action="submit">
        <h2 className='edit__heading'>EDIT USER INFO</h2> 

        <section className='edit__profile'>
          <img className='edit__avatar' src="../src/assets/images/smile.jpg" alt="" />
          <div className='edit__profile--text'>
            <label className='edit__label' htmlFor="username">Edit username here:</label>  
            <input className='edit__input' type="text" name="username" id="username" placeholder='USERNAME'/>
            <label className='edit__avatar--upload'  htmlFor="avatar">Upload a new avatar
            <input type="file" name="avatar" id="avatar" />
            </label>
            <button className='edit__button' type="submit">Update your profile</button>
          </div>
        </section>
        <Link to={'/profile/4'}><h2 className='edit__heading'>View Profile</h2> </Link>
      </form>
      <form className='edit__form' action="submit">
      <h2 className='edit__heading'>ADD NEW PROMO</h2>
            <label className='edit__label' htmlFor="promo">What's do you want to promote?</label>
            <textarea className='edit__textarea' type="text" rows="6" />
            <label className='edit__label' htmlFor="links">Add the link!</label>
            <input className='edit__input' type="text" />
            <button className='edit__button' type="submit">Post your Promo</button>
      </form>

      </div>
    </main>

  )
}

export default EditProfile
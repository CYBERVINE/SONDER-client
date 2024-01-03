import './signup.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Signup () {

  const navigate = useNavigate()
  function handleSubmit (e) {
    e.preventDefault()
    async function makeUser (e) {
      const form = e.target

        if ((form.password.value === form.confirmPassword.value) && form.password.value.length > 4){

          try{
            const {data} = await axios.post('http://localhost:8080/users', 
            {
              username: form.username.value,
              email: form.email.value,
              password: form.password.value,
              city: form.city.value,
              avatar: "http://localhost:8080/avatars/anonymous.png",
              description: "New to Sonder"
            })
            console.dir(data)
          } catch (err) {
            console.error(err)
          }
          navigate('/login')
        } else {
          console.log("Passwords don't match, just be atleat 5 characters")  
        }
      }
      makeUser(e)
  }
  return (
    <section className="signup">
    <form className='form' action="submit" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input className='form__input'type="text" name="username" placeholder='Username' required/>
      <input className='form__input'type="text" name="city" placeholder='Home City'  required/>
      <input className='form__input' type="email" name="email" placeholder='Email'  required/>
      <input className='form__input' type="password" name="password" placeholder='Password'  required/>
      <input className='form__input' type="password" name="confirmPassword" placeholder='Confirm Password'  required/>
      <button className='form__button' type="submit">Sign Up</button>
      <div className='link-section'>
      <p className='link-section__description'>Already have an account? </p><Link className='link-section__link' to={'/login'}> Login In</Link>
      </div>
    </form>
  </section>
  )
}

export default Signup
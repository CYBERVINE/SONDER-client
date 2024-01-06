import './signup.scss'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"

function Signup () {

  const navigate = useNavigate()
  const [password, setPassword] = useState("")

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
          setPassword("form__password")
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
        <input className={`form__input ${password}`} type="password" name="password" placeholder='Password'/>
        <p className={password === "" ? "none" : "display"}>Passwords must match an be at least five letters long</p>
        <input className={`form__input ${password}`} type="password" name="confirmPassword" placeholder='Confirm Password' />
        <p className={password === "" ? "none" : "display"}>Passwords must match and be at least five letters long</p>
        <button className='form__button' type="submit">Sign Up</button>
        <div className='link-section'>
        <p className='link-section__description'>Already have an account? </p><Link className='link-section__link' to={'/login'}> Login In</Link>
        </div>
        <p>"It's hard to walk a mile, we can share a step"</p>
      </form>
    </section>
  )
}

export default Signup
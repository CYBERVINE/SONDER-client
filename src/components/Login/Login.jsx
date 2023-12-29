import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './login.scss'

function Login () {
  const navigate = useNavigate()
  function handleSubmit (e) {
    e.preventDefault()
    async function validateUser (e) {
      const form = e.target
      console.log(form.username.value)
      try {
        const response = await axios.get("http://localhost:8080/login",
        // {
        //   username : form.username.value,
        //   password : form.password.value
        // }
        )
        console.log(response)
        // navigate('/map')
      } catch (err) {
        console.error(err)
      }
      
    }
    validateUser(e)
  }
  return (
    <section className="login">
    <form className='login__form form' action="submit" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input className='form__input'type="text" name="username" placeholder='Username'  required/>
      <input className='form__input' type="password" name="password" placeholder='Password'  required/>
      <button className='form__button' type="submit">Login</button>
      <div className='link-section'>
      <p className="link-section__description">Don't have an account? </p><Link className='link-section__link' to={'/signup'}> Sign Up</Link>
      </div>
    </form>
  </section>
  )
}

export default Login
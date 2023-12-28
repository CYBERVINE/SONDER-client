import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './login.scss'

function Login () {
  const navigate = useNavigate()
  function handleSubmit (e) {
    e.preventDefault()

    navigate('/map')
  }
  return (
    <section className="login">
    <form className='login__form form' action="submit" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input className='form__input'type="text" name="username" placeholder='Username'/>
      <input className='form__input' type="password" name="password" placeholder='Confirm Password'/>
      <button className='form__button' type="submit">Login</button>
      <div className='link-section'>
      <p className="link-section__description">Don't have an account? </p><Link className='link-section__link' to={'/signup'}> Sign Up</Link>
      </div>
    </form>
  </section>
  )
}

export default Login
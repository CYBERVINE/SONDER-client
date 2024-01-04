import { Link } from "react-router-dom"
import "./Hero.scss"

function Hero () {
  return (
    <>
    <div className="header">

    <h1 className="header__line header__line--one">The World is the post</h1>
    <h1 className="header__line header__line--two"><em>THIS</em> is the comments section.</h1>
     <div className="hero__gif--container">
    </div> 
    <h1 className="header__line header__line--three">Map your inner monolouge</h1>
    </div>
    <section className="enterance">
      <Link to={'/map'} className="enterance__anonymous enterance__card">
        <p>Post Anonymously</p>
        <p>Keep it local</p>
        <div className="ellpses">
          <div className="ellpsis ellpsis__one"></div>
          <div className="ellpsis ellpsis__two"></div>
          <div className="ellpsis ellpsis__three"></div>
        </div>
      </Link>
      <div className="enterance__known enterance__card">
        <Link to={'/login'}>LOGIN</Link>
        <p>or</p>
        <Link to={'/signup'}>SIGN UP</Link>
      </div>
    </section>
    </>
  )
}

export default Hero
import { Link } from "react-router-dom"
import "./Hero.scss"

function Hero () {
  return (
    <>
    <h1 className="header header__one">The World is the post</h1>
    <h1 className="header header__two">And This is the comment section</h1>
    <div className="hero__image">
    <p className="hero__text">Your thoughts here</p>
    </div>
    <h1 className="header header__three">Map your inner monolouge</h1>
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
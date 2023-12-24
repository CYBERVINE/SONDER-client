import { Link } from "react-router-dom"
import "./Hero.scss"

function Hero () {
  return (
    <>
    <h1>The World is the post</h1>
    <h1>And This is the comments section</h1>
    <h1>Map your inner monolouge</h1>
    <div className="hero__image"></div>
    <section className="enterance">
      <Link to={'/addcomment'} className="enterance__anonymous enterance__card">
        <p >Quick Post Anonymously</p>
        <p>Keep it local</p>
        
      </Link>
      <div className="enterance__known enterance__card">
        <Link to={'/login'}>LOGCIN</Link>
        <Link to={'/signup'}>SIGN UP</Link>
      </div>
    </section>
    </>
  )
}

export default Hero
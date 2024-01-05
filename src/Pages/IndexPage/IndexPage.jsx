import Hero from "../../components/Hero/Hero"
import './IndexPage.scss'


function IndexPage () {
  return (
    <main className="index">
    <section className="index-page">
      <video className="index-page__video"src="../src/assets/videos/hero-video1.mov" loop={true} autoPlay={true} muted type="video/mp4">
      </video>
    <Hero/>
    </section>
      <div className="index-page__backing">
      </div>
      <footer className="index-page__footer">
        <p className="index-page__footer--text index-page__footer--quote"> <b>sonder</b> <i>noun</i> The feeling of sublime upon realizing that everyone, including strangers passing in the street, has a life as rich and vivid as one's own.</p>
        <div className="index-page__footer--links">  
        <p className="index-page__footer--text">&#169; KEVIN BYRNE </p>
        <a className="index-page__footer--text index-page__footer--link" href="https://linkedin.com/in/kevinbyrne09"> LinkedIn</a>
        <a className="index-page__footer--text index-page__footer--link" href="https://github.com/CYBERVINE">github</a>
        <a className="index-page__footer--text index-page__footer--link" href="https://cybervine.github.io/chess.html">Other Project</a>
        </div>
      </footer>

    </main>
  )
}

export default IndexPage
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
        <p className="index-page__footer--text index-page__footer--quote">
           <b>Sonder</b>, <i>noun</i>: The feeling upon realizing that all people, including strangers passing in the street, lives a life as rich and complex as one's own.</p>
        <p className="index-page__footer--text index-page__footer--quote">
           The world inspires thoughts that often go unshared. SONDER is for local creators, comedians, poets, activists, business owners, and any one who wants to share thier nuggets of wisdom, or promote their good to the world.</p>
        <p className="index-page__footer--text index-page__footer--quote">
           PERSONAL JOURNAL | PROMOTIONAL TOOL | EMPATHY AVENUE</p>
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
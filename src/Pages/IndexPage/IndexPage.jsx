import Hero from "../../components/Hero/Hero"
import './IndexPage.scss'


function IndexPage () {
  return (
    <>
    <section className="index-page">
      <video className="index-page__video"src="../src/assets/videos/hero-video.mp4" loop={true} autoPlay={true} muted type="video/mp4">
      </video>
    <Hero/>
    </section>
      <div className="index-page__backing">


        <footer className="index-page__footer">
        &#169; KEVIN BYRNE
        </footer>

      </div>
    </>
  )
}

export default IndexPage
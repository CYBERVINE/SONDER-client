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
      <div className="index-page__backing"></div>
    </>
  )
}

export default IndexPage
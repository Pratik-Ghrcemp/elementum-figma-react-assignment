import './Hero.css'
import heroAvatar1 from '../assets/target/hero-avatar-1.png'
import heroAvatar2 from '../assets/target/hero-avatar-2.png'
import heroAvatar3 from '../assets/target/hero-avatar-3.png'
import heroAvatar4 from '../assets/target/hero-avatar-4.png'
import heroAvatar5 from '../assets/target/hero-avatar-5.png'
import heroAvatar6 from '../assets/target/hero-avatar-6.png'
import heroAvatar7 from '../assets/target/hero-avatar-7.png'
import heroAvatar8 from '../assets/target/hero-avatar-8.png'
import heroMain from '../assets/target/hero-main.png'

const peopleImages = [
  heroAvatar1,
  heroAvatar2,
  heroAvatar3,
  heroAvatar4,
  heroAvatar5,
  heroAvatar6,
  heroAvatar7,
  heroAvatar8,
]

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__scribble" aria-hidden="true">
          <span></span>
          <span></span>
        </div>

        <div className="hero__top">
          <h1 className="hero__title">
            The <span className="hero__line-word">thinkers</span> and<br />
            doers were <span className="hero__pink">changing</span><br />
            the <span className="hero__green">status</span> Quo with
          </h1>
          <p className="hero__description">
            We are a team of strategists, designers communicators, researchers. Together,
            we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

        <div className="hero__people" aria-label="Elementum team members">
          {peopleImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`hero__avatar hero__avatar--${index + 1}`}
            />
          ))}
        </div>

        <div className="hero__intro">
          <div className="hero__intro-text">
            <h2><span className="underline">Tomorrow</span> should<br />be better than <span className="highlight">today</span></h2>
            <p>
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <a href="#" className="text-link">Read more</a>
          </div>

          <div className="hero__visual">
            <img
              src={heroMain}
              alt="People in a business meeting"
              className="hero__main-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

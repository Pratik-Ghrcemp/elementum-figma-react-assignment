import './ProgressSection.css'
import progressMain from '../assets/target/progress-main.png'

const ProgressSection = () => {
  return (
    <section className="progress">
      <div className="container progress__inner">
        <div className="progress__image-wrap">
          <img
            src={progressMain}
            alt="Team working together at a table"
            className="progress__image"
          />
        </div>

        <div className="progress__content">
          <h2><span className="highlight">See</span> how we can<br />help you <span className="underline">progress</span></h2>
          <p>
            We add a layer of fearless insights and action that allows change makers
            to accelerate their progress in areas such as brand, design, digital,
            comms and social research.
          </p>
          <a href="#" className="text-link">Read more</a>
        </div>
      </div>
    </section>
  )
}

export default ProgressSection

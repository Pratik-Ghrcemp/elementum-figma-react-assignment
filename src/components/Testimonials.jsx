import './Testimonials.css'
import testAvatar1 from '../assets/target/test-avatar-1.png'
import testAvatar2 from '../assets/target/test-avatar-2.png'
import testAvatar3 from '../assets/target/test-avatar-3.png'
import testAvatar4 from '../assets/target/test-avatar-4.png'
import testAvatar5 from '../assets/target/test-avatar-5.png'
import testAvatar6 from '../assets/target/test-avatar-6.png'
import testAvatar7 from '../assets/target/test-avatar-7.png'
import testAvatar8 from '../assets/target/test-avatar-8.png'

const customerImages = [
  testAvatar1,
  testAvatar2,
  testAvatar3,
  testAvatar4,
  testAvatar5,
  testAvatar6,
  testAvatar7,
  testAvatar8,
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container testimonials__inner">
        <h2><span className="highlight">What</span> our customer<br />says <span className="underline">About Us</span></h2>

        <div className="testimonials__layout">
          {customerImages.map((image, index) => (
            <img key={image} src={image} alt="" className={`testimonials__avatar testimonials__avatar--${index + 1}`} />
          ))}

          <blockquote className="testimonials__card">
            <p>
              Elementum delivered the site with the timeline as they requested. In the end,
              the client found a 50% increase in traffic within days since its launch.
              They also had an impressive ability to use technologies that the company
              hasn't used, which have also proved to be easy to use and reliable.
            </p>
            <cite>&mdash; Client, Digital Lead</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

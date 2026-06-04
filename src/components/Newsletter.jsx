import './Newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__shape" aria-hidden="true"></div>
        <div className="container newsletter__content">
          <h2>Subscribe to<br />our newsletter</h2>
          <p>To make your stay special and even more memorable</p>
          <a href="#" className="button">Subscribe Now</a>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

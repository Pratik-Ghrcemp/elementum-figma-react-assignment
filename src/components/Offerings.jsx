import './Offerings.css'

const offeringsList = [
  {
    label: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    label: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

const Offerings = () => {
  return (
    <section className="offerings">
      <div className="container offerings__inner">
        <h2 className="offerings__title">What we <span className="highlight">can</span><br /><span className="underline">offer</span> you!</h2>

        <div className="offerings__list">
          {offeringsList.map((item) => (
            <article key={item.title} className="offerings__row">
              <p className="offerings__label">{item.label}</p>
              <h3>{item.title}</h3>
              <a href="#" className="offerings__arrow" aria-label={`Read more about ${item.title}`}>&rarr;</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings

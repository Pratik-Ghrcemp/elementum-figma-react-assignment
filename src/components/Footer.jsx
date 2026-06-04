import './Footer.css'

const companyLinks = ['Home', 'Studio', 'Service', 'Blog']
const termsLinks = ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility']
const socialLinks = ['Instagram', 'LinkedIn', 'Youtube', 'Twitter']

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__column">
              <h4>Company</h4>
              <ul>
                {companyLinks.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4>Terms & Policies</h4>
              <ul>
                {termsLinks.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4>Follow Us</h4>
              <ul>
                {socialLinks.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__column footer__contact">
              <h4>Terms & Policies</h4>
              <p>1498w Fulton ste, STE<br />2D Chicago, IL 63867.</p>
              <p>(123) 456789000</p>
              <p>info@elementum.com</p>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy;2023 Elementum. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useState } from 'react'
import './Navbar.css'

const navLinks = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Main navigation">
        <a href="#" className="navbar__logo">Elementum</a>

        <button
          className="navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="navbar__link" onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

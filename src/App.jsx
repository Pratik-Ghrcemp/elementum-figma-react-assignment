import './App.css'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Newsletter from './components/Newsletter.jsx'
import Offerings from './components/Offerings.jsx'
import ProgressSection from './components/ProgressSection.jsx'
import Testimonials from './components/Testimonials.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Offerings />
        <ProgressSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App

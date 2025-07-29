import Home from './Home'
import Navigation from './Navigation'
import Footer from './Footer'
import Gallery from './Gallery'
import Places from './Places'
import ContactForm from './ContactForm'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

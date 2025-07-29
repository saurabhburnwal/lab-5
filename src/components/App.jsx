import Home from './Home'
import PromotionVideo from '../assets/promotion_video.webm'
import Navigation from './Navigation'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home path={PromotionVideo} />} />
        <Route path="/home" element={<Home path={PromotionVideo} />} />
        <Route path="/places" element={<div>Places Page</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

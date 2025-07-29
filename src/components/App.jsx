import Home from './Home'
import PromotionVideo from '../assets/promotion_video.webm'
import Navigation from './Navigation'
import Footer from './Footer'
import Gallery from './Gallery'
import Places from './Places'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home path={PromotionVideo} />} />
        <Route path="/home" element={<Home path={PromotionVideo} />} />
        <Route path="/places" element={<Places />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Layout/Footer'
import Navbar from './component/Layout/Navbar'
import Home from './pages/Home'
import GalleryPage from './component/GalleryPage/GalleryPage';
import ContactPage from './component/ContactPage/ContactPage';
import ReviewsPage from './component/ReviewsPage/ReviewsPage';
import AboutUsPage from './component/AboutUsPage/AboutUsPage';
import MiCasaPage from './component/MiCasaPage/MiCasaPage';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/capitolcasa/" element={<Home />} />
        <Route path="/capitolcasa/the-host" element={<AboutUsPage />} />
        <Route path="/capitolcasa/gallery" element={<GalleryPage />} />
        <Route path="/capitolcasa/contact-us" element={<ContactPage />} />
        <Route path="/capitolcasa/mi-casa" element={<MiCasaPage />} />

        <Route path="/capitolcasa/reviews" element={<ReviewsPage />} />



      </Routes>
      <Footer />
    </>
  )
}

export default App


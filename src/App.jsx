import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 1. Keep layout components static. 
// We want the Navbar and Footer to load immediately on every page.
import Footer from './component/Layout/Footer';
import Navbar from './component/Layout/Navbar';

// 2. Lazy load the page components.
// These will only be fetched when the user actually navigates to their specific route.
const Home = lazy(() => import('./pages/Home'));
const GalleryPage = lazy(() => import('./component/GalleryPage/GalleryPage'));
const ContactPage = lazy(() => import('./component/ContactPage/ContactPage'));
const ReviewsPage = lazy(() => import('./component/ReviewsPage/ReviewsPage'));
const AboutUsPage = lazy(() => import('./component/AboutUsPage/AboutUsPage'));
const MiCasaPage = lazy(() => import('./component/MiCasaPage/MiCasaPage'));

function App() {
  return (
    <>
      <Navbar />

      {/* 3. Wrap routes in Suspense */}
      {/* The fallback UI displays while the requested page chunk is downloading */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a2b3c]"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/capitolcasa/" element={<Home />} />
          <Route path="/capitolcasa/the-host" element={<AboutUsPage />} />
          <Route path="/capitolcasa/gallery" element={<GalleryPage />} />
          <Route path="/capitolcasa/contact-us" element={<ContactPage />} />
          <Route path="/capitolcasa/mi-casa" element={<MiCasaPage />} />
          <Route path="/capitolcasa/reviews" element={<ReviewsPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
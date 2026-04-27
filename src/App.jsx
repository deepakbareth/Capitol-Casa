import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Layout/Footer'
import Navbar from './component/Layout/Navbar'
import Home from './pages/Home'



function App() {
  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/capitolcasa/" element={<Home />} />
     

      </Routes>
     <Footer />
    </>
  )
}

export default App


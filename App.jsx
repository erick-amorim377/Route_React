import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';

import Navbar from '../components/Navbar';
import Products from './pages/Products';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Products />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App

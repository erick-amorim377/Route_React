import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/info';
import Navbar from '../components/Navbar';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App

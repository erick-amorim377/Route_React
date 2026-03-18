import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/info';
import Navbar from '../components/Navbar';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import SearchForm from '../components/SearchForm';
import Search from './pages/Search';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          <Route path='/company' element={<Navigate to="/about" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App

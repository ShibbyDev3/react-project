import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';

import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header />
    <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:path' element={<MoviePage />}/>
          <Route path='menu' element={<MenuPage />} />
          <Route path='contact' element={<ContactPage />} />
      </Routes>
    <Footer />
    <script
          id = 'bootstrap'
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
    </>
  );
}

export default App;

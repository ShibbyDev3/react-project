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
          <Route path='directory/:campsiteId' element={<MoviePage />}/>
          <Route path='menu' element={<MenuPage />} />
          <Route path='contact' element={<ContactPage />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;

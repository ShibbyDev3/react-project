import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import MoviePage from './pages/movie';
import MenuPage from './pages/menu';
import ContactPage from './pages/contact';

import Header from './components/header'
import Footer from './components/footer'


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

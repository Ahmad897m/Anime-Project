import {HashRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import AnimeItem from './components/AnimeItem';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';

function App() {
  return (
    <HashRouter >
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/anime/:id' element={<AnimeItem />} />
      <Route path='/characters/:id' element={<Gallery />} />
    </Routes>
    </HashRouter>
  );
}

export default App;

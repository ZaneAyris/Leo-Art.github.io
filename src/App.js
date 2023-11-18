import './App.css'
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as HashRouter, Route, Routes, Link, Outlet} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import navbar from './components/navbar';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ArtPage from './pages/ArtPage';

function App() {

  return (
    <HashRouter basename='Leo-Art.github.io'>

      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}> 
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/art' element={<ArtPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
      </Route>


      <Route path='*' element={<NoPage/>} />
      </Routes>
    </HashRouter>
  );

  function LayoutsWithNavbar() {
    return (
      <div className='App'>
        {navbar()}
        <Outlet />
      </div>
    );
  }
}

export default App;
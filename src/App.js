import './App.css'
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as HashRouter, Route, Routes, Link, Outlet} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import navbar from './components/navbar';
import useLocalStorage from 'use-local-storage'
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ArtPage from './pages/ArtPage';

function App() {


  return (
    <HashRouter basename='Leo-Art.github.io'>

      <Routes>
      <Route path="/" element={<LayoutTheme />}>
        <Route path="/" element={<LayoutsWithNavbar />}> 
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/art' element={<ArtPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
      </Route>


      <Route path='*' element={<NoPage/>} />
      </Route>
      </Routes>
    </HashRouter>
  );

    function LayoutTheme() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);


      return (
        <div className = "App" data-theme={theme}>
        <Outlet/>
        <button onClick={switchTheme}> Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme </button>
        
        </div>
      )
    }

  function LayoutsWithNavbar() {
    return (
      <>
        {navbar()}
        {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
        {/* This decides where the child component will be placed IE as its below navbar, it will be generated under it*/}
        <Outlet /> 
        
        {/* You can add a footer to get fancy in here :) */}
        
      </>
    );
  }

}

export default App;

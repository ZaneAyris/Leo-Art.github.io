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

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log("A")
  }, [theme]);

  return (
    <HashRouter basename='Leo-Art.github.io'>

      <Routes>
      <Route path="/" element={<LayoutTheme theme={theme} switchTheme={switchTheme}/>}>
        <Route path="/" element={<LayoutsWithNavbar />}> 
          <Route path='/' element={<HomePage darkmode={(theme === 'dark')}/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/art' element={<ArtPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
      </Route>


      <Route path='*' element={<NoPage/>} />
      </Route>
      </Routes>
    </HashRouter>
  );
function LayoutTheme({ theme, switchTheme }) {
    return (
      <div className="App" data-theme={theme}>
        <Outlet />
        <button onClick={switchTheme}> Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme </button>
      </div>
    )
  }

  function LayoutsWithNavbar() {
    return (
      <>
        {navbar()}
        <Outlet />
      </>
    );
  }
}

export default App;
import React from 'react';
import Hero from './components/Hero';
import Figures from './components/Figures';
import './App.css';
import BlogSection from './components/BlogSection';
import Partners from './components/Partners';
import Social from './components/Social';
import Newsfeed from './components/Newsfeed';
import Quicklinks from './components/Quicklinks';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Hero />
    <Figures />
    <BlogSection />
    <Partners />
    <Social />
    <Newsfeed />
    <Quicklinks />
    <Footer />
    </>
  )
}

export default App;

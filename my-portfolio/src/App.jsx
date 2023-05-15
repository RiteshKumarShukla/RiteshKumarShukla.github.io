import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Github from './components/Github/Github';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Navbar/>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Github />
      <Contact />
      <Footer />
    </>
  )
}

export default App

import React, { useRef, useEffect } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';


const Header = () => {
  const jobTitles = [
    'Full Stack Developer...',
    'MERN Stack Developer...',
    'Front End Developer...',
    'React Js Developer...',
  ];
  const jobTitleRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let currentTitle = '';
    let typingTimeout;

    const startTyping = () => {
      if (currentIndex >= jobTitles.length) {
        currentIndex = 0;
      }

      currentTitle = jobTitles[currentIndex];
      typingTimeout = setTimeout(() => {
        typeLetter(0);
      }, 500);
    };

    const typeLetter = (index) => {
      const text = currentTitle.slice(0, index);
      jobTitleRef.current.textContent = text;

      if (index < currentTitle.length) {
        typingTimeout = setTimeout(() => {
          typeLetter(index + 1);
        }, Math.floor(Math.random() * 100) + 50);
      } else {
        currentIndex++;
        setTimeout(() => {
          startTyping();
        }, 2000);
      }
    };

    startTyping();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 id="user-detail-name">Ritesh Kumar Shukla</h1>
        <h5 className="text-light" ref={jobTitleRef}></h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;

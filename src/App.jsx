import React, { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './components/about';
import ContactComponent from './components/contactUS';
import Experiences from './components/expirance';
import FeaturedProjects from './components/FeaturedProjects';
import HeroSection from './components/mainSection';
import Navbar from './components/Navbar';
import SFeaturedProjects from './components/SFeaturedProject';
import FullScreenVideo from './components/FullScreenVideo';
import ThridFeaturedProjects from './components/ThridFeatureProject';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoPlaying(false);
    }, 2000); // Video will automatically stop after 5 seconds (adjust as needed)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVideoPlaying ? (
        <FullScreenVideo onEnd={() => setIsVideoPlaying(false)} />
      ) : (
        <div className="landing-page">
          <Navbar />
          <HeroSection />
          <AboutMe />
          <Experiences />
          <FeaturedProjects />
          <div className='mt-12'>
            <SFeaturedProjects />
          </div>
         <ThridFeaturedProjects />
          <ContactComponent />
        </div>
      )}
    </>
  );
}

export default App;

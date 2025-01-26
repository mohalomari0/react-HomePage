import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Activity from './components/Activity/Activity';
import Teams from './components/Teams/Teams';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <AboutUs />
            <Services />
            <Activity />
            <Teams />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
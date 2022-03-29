import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import HeroSection from '../components/HeroSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Topbar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle = {toggle} />
        <HeroSection />
        </>
    );
};

export default Home;
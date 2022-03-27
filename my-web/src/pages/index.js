import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Topbar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle = {toggle} />
        </>
    );
};

export default Home;
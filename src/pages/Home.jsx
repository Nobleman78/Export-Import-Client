import React from 'react';
import HeroSection from '../components/HeroSection';
import Capabilities from '../sections/Capabilities';
import Performance from '../sections/Performance';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Capabilities/>
            <Performance/>
        </div>
    );
};

export default Home;
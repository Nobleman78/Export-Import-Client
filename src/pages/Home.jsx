import React from 'react';
import HeroSection from '../components/HeroSection';
import Capabilities from '../sections/Capabilities';
import Performance from '../sections/Performance';
import Service from '../sections/Service/Service';


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Capabilities/>
            <Performance/>
            <Service/>
        </div>
    );
};

export default Home;
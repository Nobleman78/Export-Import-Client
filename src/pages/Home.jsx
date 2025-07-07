import React from 'react';
import HeroSection from '../components/HeroSection';
import Capabilities from '../sections/Capabilities';
import Performance from '../sections/Performance';
import Service from '../sections/Service/Service';
import ChooseUs from '../sections/Choose/ChooseUs';
import Promises from '../sections/Promises/Promises';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Capabilities/>
            <Performance/>
            <Service/>
            <ChooseUs/>
            <Promises/>
          
        </div>
    );
};

export default Home;
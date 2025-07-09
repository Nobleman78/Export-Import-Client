import React from 'react';
import HeroSection from '../components/HeroSection';
import Capabilities from '../sections/Capabilities';
import Performance from '../sections/Performance';
import Service from '../sections/Service/Service';
import ChooseUs from '../sections/Choose/ChooseUs';
import Promises from '../sections/Promises/Promises';
import Features from '../sections/Features/Features';
import WorkingPrinciple from '../sections/WorkingPrinciple';
import Testimonial from '../sections/Testimonial';
import OurProcess from '../sections/OurProcess';


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Capabilities/>
            <Performance/>
            <Service/>
            <ChooseUs/>
            <Promises/>
            <Features/>
            <WorkingPrinciple/>
            <Testimonial/>  
            <OurProcess/> 
        </div>
    );
};

export default Home;
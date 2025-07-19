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
import Blog from '../sections/Blog/Blog';
import FAQQuoteSection from '../sections/Faq';
import CalltoAction from '../sections/CalltoAction';
import { Helmet } from 'react-helmet';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home |NextEra Logistic</title>
            </Helmet>
            <HeroSection />
            <Capabilities />
            {/* <Performance /> */}
            <Service />
            {/* <ChooseUs /> */}
            {/* <Promises /> */}
            <Features />
            {/* <WorkingPrinciple /> */}
            {/* <Testimonial /> */}
            {/* <OurProcess /> */}
            {/* <Blog /> */}
            <FAQQuoteSection />
            <CalltoAction />
        </div>
    );
};

export default Home;
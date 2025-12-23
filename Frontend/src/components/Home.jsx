import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Mission from './Mission';
import Treatments from './Treatments';

import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';


const Home = () => {
    return (
        <>
            <Hero />
            <Mission />
            <Features />

            <Treatments />
            <WhyChooseUs />
            <HowItWorks />

        </>
    );
};

export default Home;

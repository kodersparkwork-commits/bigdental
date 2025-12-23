import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Mission from './Mission';
import Treatments from './Treatments';

import HowItWorks from './HowItWorks';


const Home = () => {
    return (
        <>
            <Hero />
            <Mission />
            <Features />
            <Treatments />

            <HowItWorks />

        </>
    );
};

export default Home;

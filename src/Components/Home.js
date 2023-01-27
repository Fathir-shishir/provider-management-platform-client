import React from 'react';
import useAgreements from '../Hooks/useAgreements';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Project from './Project';

const Home = () => {
    
    return (
    <div>
       
        <Banner></Banner>
        <Project></Project>
        <AboutUs></AboutUs>

       
    </div>
    );
};

export default Home;
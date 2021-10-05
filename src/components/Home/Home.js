import React from 'react';
import Courses from '../Courses/Courses';
import Hero from '../Hero/Hero';
import Newslatter from '../Newslatter/Newslatter';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Courses></Courses>
            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;
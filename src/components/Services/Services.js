import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./edu.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="services">
            <div className="container">
                <div className="row py-5 my-4">
                    <div className="services-title">
                        <h2 className="text-center fw-bold">Our Courses</h2>
                    </div>
                    {
                        courses.map(course => <Course course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
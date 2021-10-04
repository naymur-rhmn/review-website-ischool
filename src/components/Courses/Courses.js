import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./edu.JSON')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)))
    }, [])
    return (
        <div className="courses py-5">
            <div className="container">
                <div className="row">
                    {
                        courses.map(course => <Course
                            key={course._id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;
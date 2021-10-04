import React from 'react';
import './Course.css'

const Course = (props) => {
    const { title, picture, price, tutname, about } = props?.course;
    return (
        <div className="col-lg-6 py-3">
            <div className="course p-2 shadow">
                {/* img */}
                <img className="img-fluid course-img" src={picture} alt="" />
                {/* course content */}
                <div className="course-content px-3">
                    <h4 className="mt-3 mb-3">{title}</h4>
                    <p>{about}</p>
                    <div className="d-flex justify-content-between">
                        <p>by <span className="fw-bold">{tutname}</span></p>
                        <h6 className="me-5 fw-bold text-warning">{price}</h6>
                    </div>
                    {/* button */}
                    <button className="boxed-btn btn-bg shadow rounded-pill ">Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;
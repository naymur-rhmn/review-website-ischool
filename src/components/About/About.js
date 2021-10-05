import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about  py-5 my-3 ">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        {/* content */}
                        <div className="col-lg-6">
                            <h2 className="fw-bold">We are iSchool.
                                An online learning community</h2>
                            <p>At Turitor, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.</p>
                        </div>
                        {/* image */}
                        <div className="col-lg-6">
                            <img className="img-fluid" src="https://1635225677.rsc.cdn77.org/images/online_learning_communities.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row py-4 d-flex align-items-center">
                        {/* image */}
                        <div className="col-lg-6">
                            <img className="img-fluid" src="https://www.aihr.com/wp-content/uploads/Leadership-Development-Plan.jpg" alt="" />
                        </div>
                        {/* content */}
                        <div className="col-lg-6">
                            <h2 className="fw-bold">A leadership team with vision</h2>
                            <p>Our executives lead by example and guide us to accomplish great things every day. Online learning offers a new way to explore.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="contact-bg py-5">
                <div className="container">
                    <div className="row">
                        <div className="contact d-flex align-items-center justify-content-between">
                            <div className="content">
                                <h3>FEEL FREE TO ASK US</h3>
                                <p className="text-white">If you have any questions, please feel free to drop us questions</p>
                            </div>
                            <div className="content-btn">
                                <NavLink to="/contact"><button>CONTACT US</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
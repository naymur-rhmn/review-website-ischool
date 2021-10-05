import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-section py-5 my-4">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8">
                        {/* contact form */}
                        <div className="contact-form ">
                            <h3 className="fw-bold mb-4">Talk to us!</h3>
                            <p>Your Name (required)</p>
                            <input type="text" required />
                            <p>Your Email (required)</p>
                            <input type="email" required />
                            <p>Subject</p>
                            <input type="text" />
                            <p>Your Message</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <button>Send</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* contact aditional info */}
                        <div className="contact-add ps-5">
                            <h6 className="fw-bold mb-4">BEFORE CONTACTING US</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Non equidem invideo, miror magis posuere velit aliquet.</p>
                            <h6 className="fw-bold mb-3 mt-5">CONTACT INFORMATION</h6>
                            <p>184 Main Collins Street West Victoria 8007 Australia</p>
                            <p><i className="fas fa-phone-alt me-2"></i>  1800-333-222</p>
                            <p><i className="fas fa-envelope me-2"></i> contact@versatilewptheme.com</p>
                            <p className="ms-2">Everyday 9:00-17:00</p>
                            {/* social media */}
                            <div className="social-media">
                                <h6 className="mt-6 fw-bold">SOCIAL MEDIA</h6>
                                <a href="##"><i className="fab fa-twitter"></i></a>
                                <a href="##"><i className="fab fa-google-plus-g"></i></a>
                                <a href="##"><i className="fab fa-pinterest-p"></i></a>
                                <a href="##"><i className="fab fa-dribbble"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
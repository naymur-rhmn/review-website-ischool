import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className="faq py-5 my-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 mb-5 text-center">
                        {/* faq title */}
                        <div className="faq-title faq-style">
                            <h2 className="fw-bold">FAQ</h2>
                            <p className="text-center">UPCOMING EDUCATION EVENTS TO FEED YOUR BRAIN.</p>
                        </div>
                    </div>
                </div>
                {/* faq content */}
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="faq-content">
                            <h4 className="fw-bold faq-style">Can i edit the files</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-content">
                            <h4 className="fw-bold faq-style">Is it Layered ?</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-content">
                            <h4 className="fw-bold faq-style">How can i edit the masks ?</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-content">
                            <h4 className="fw-bold faq-style">What do i need to open the files ?</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-content">
                            <h4 className="fw-bold faq-style">How can i edit smart objects ?</h4>
                            <p>Yes, in fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-content">
                            <h4 className="fw-bold faq-style">Is the font free ?</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry’s standard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
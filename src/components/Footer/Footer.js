import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-3">
                        <ul>
                            <li><a href="##">psd to html</a></li>
                            <li><a href="##">templates</a></li>
                            <li><a href="##">documentation</a></li>
                            <li><a href="##">get a support</a></li>
                            <li><a href="##">affiliate</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <li><a href="##">blog</a></li>
                            <li><a href="##">terms of usage</a></li>
                            <li><a href="##">privacy policy</a></li>
                            <li><a href="##">pricing & plan</a></li>
                            <li><a href="##">become a teacher</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <li><a href="##"><i className="fab fa-twitter"></i> twitter</a></li>
                            <li><a href="##"><i className="fab fa-google-plus-g"></i> google plus</a></li>
                            <li><a href="##"><i className="fab fa-pinterest-p"></i> pinterest</a></li>
                            <li><a href="##"><i className="fab fa-dribbble"></i> dribble</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <p>Your email is safe with us and we hate spam as much as you do.</p>
                        <div className="subscription">
                            <input className="w-100 p-2 mb-2" type="email" name="" id="" placeholder="Email Address" />
                            <button className="boxed-btn btn-warning">SIGN UP FOR FREE</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="copyright py-3">
                        <p>COPYRIGHTS &copy; 2021 <span>iSchool</span> ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
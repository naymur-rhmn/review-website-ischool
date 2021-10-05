import React from 'react';
import './Newslatter.css'

const Newslatter = () => {
    return (
        <div className="newslatter p-5">
            <div className="container">
                <div className="row">
                    <div className="col py-5 text-center">
                        <div className="nw-content">
                            <h2 className="fw-bold">Join Thousand Of Happy Students!</h2>
                            <p>Subscribe our newsletter &nbsp; get latest news and updation!
                            </p>
                            <div className="p-1 mt-3 subscribe-box bg-white d-inline-block">
                                <input className=" border-0 p-3" type="email" name="" id="" placeholder="Enter email address" />
                                <button className="p-3 border-0 bg-warning fw-bold px-4 ">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;
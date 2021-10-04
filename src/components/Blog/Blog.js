import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog py-5 my-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="blog-title mb-5 text-center">
                            <h1 className="fw-bold">Blog</h1>
                            <p>Our latest news, updates, and stories for developers</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="text-center single-blog p-4">
                            <img src="https://web-dev.imgix.net/image/1L2RBhCLSnXjCnSlevaDjy3vba73/NDg4DvtC6Hkbly4MyGkZ.jpeg?fit=crop&h=240&w=354&auto=format&dpr=1&q=75" alt="" />
                            <h4 className="mt-3">Bringing instant page-loads to the browser through speculative prerendering</h4>
                            <p>Learn more about speculative prerendering in the browser and how to participate in Chrome origin trial.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-center single-blog p-4">
                            <img src="https://web-dev.imgix.net/image/vgdbNJBYHma2o62ZqYmcnkq3j0o1/6Qu0JTWldoS9Uo6dzH3P.png?fit=crop&h=240&w=354&auto=format&dpr=1&q=75" alt="" />
                            <h4 className="mt-3">How Swappie increased mobile revenue by 42% by focusing on Core Web Vitals</h4>
                            <p>Finding correlation between site performance and business metrics was the key to driving the success of their optimization efforts.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-center single-blog p-4">
                            <img src="https://web-dev.imgix.net/image/eqprBhZUGfb8WYnumQ9ljAxRrA72/FITOGeO0PDyPrBveixB7.jpeg?fit=crop&h=240&w=354&auto=format&dpr=1&q=75" alt="" />
                            <h4 className="mt-3">How SPA architectures affect Core Web Vitals</h4>
                            <p>Answers to common questions about SPAs, Core Web Vitals, and Google's plan to address current measurement limitations.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-center single-blog p-4">
                            <img src="https://web-dev.imgix.net/image/ZDZVuXt6QqfXtxkpXcPGfnygYjd2/Hu0ljomDqgb0y7h7REp6.jpg?fit=crop&h=240&w=354&auto=format&dpr=1&q=75" alt="" />
                            <h4 className="mt-3">Using CSS Module Scripts to import stylesheets</h4>
                            <p>Learn how to use CSS module scripts to import CSS stylesheets using the same syntax as JavaScript modules.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-center single-blog p-4">
                            <img src="https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/9enjDnqrgdzS6lUOWAGO.png?fit=crop&h=240&w=354&auto=format&dpr=1&q=75" alt="" />
                            <h4 className="mt-3">Building a switch component</h4>
                            <p>A foundational overview of how to build a responsive and accessible switch component.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-center single-blog p-4">
                            <img src="https://web-dev.imgix.net/image/PTlEGTxNW2XkfI8mA3pIGDFxdYY2/ApVe49OiB4KIJwcC7njy.jpg?fit=crop&h=240&w=354&auto=format&dpr=1&q=75" alt="" />
                            <h4 className="mt-3">A performance-focused workflow based on Google tools</h4>
                            <p>Combine Google tools to audit, improve and monitor your website effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
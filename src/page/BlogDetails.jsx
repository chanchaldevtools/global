import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function BlogDetails() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <div>
            <section className='blog-carousel'>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/images/blog/blog4.jpg" alt="First slide" />
                            <div class="carousel-caption d-md-block">
                                <p>Latest Blog</p>
                                <h6><b>Blog Can Be Everything Nowadays : </b>Engineers, medical people, scientific people, have an obsession</h6>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/images/blog/blog5.jpeg" alt="Second slide" />
                            <div class="carousel-caption d-md-block">
                                <p>Latest Blog</p>
                                <h6><b>Blog Can Be Everything Nowadays : </b>Engineers, medical people, scientific people, have an obsession</h6>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/images/blog/blog1.jpeg" alt="Third slide" />
                            <div class="carousel-caption d-md-block">
                                <p>Latest Blog</p>
                                <h6><b>Blog Can Be Everything Nowadays : </b>Engineers, medical people, scientific people, have an obsession</h6>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section className="blog-details">
                <div className='container'>
                    <div className='all-info'>
                        <span><Link to="/blog-details" onClick={() => setMenuOpen(false)}><i class="fa fa-chevron-left"></i> Back</Link> &nbsp; &nbsp; <Link to="/blog-details" onClick={() => setMenuOpen(false)}>Back to Blog home <i class="fa fa-chevron-right" aria-hidden="true"></i></Link></span>
                        <h5>Designing Perceptions Instead of Solutions</h5>
                        <h6>Engineers, medical people, scientific people, have an obsession with solving the problems of reality, once you reach a basic level of wealth in create entire designs with</h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetails
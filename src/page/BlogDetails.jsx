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
                        <span><Link to="/blog" onClick={() => setMenuOpen(false)}><i class="fa fa-chevron-left"></i> Back</Link> &nbsp; &nbsp; <Link to="/" onClick={() => setMenuOpen(false)}>Back to Blog home <i class="fa fa-chevron-right" aria-hidden="true"></i></Link></span>
                        <h5>Designing Perceptions Instead of Solutions</h5>
                        <div className='social-links'>
                          <div><p>0</p></div>
                          <div class="btn-group dropright">
                            <button type="button" class="arrow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/images/right-drop.png" alt="" />
                            </button>
                            <div class="dropdown-menu blog-drop">
                                <div className='d-flex align-items-center'>
                                <a class="dropdown-item copy" href="#">
                                <p>share</p>
                                <i class="fa fa-clipboard"></i>
                                <p>link</p>
                                </a> | 
                                <a class="dropdown-item" href="#"><i class="fa fa-facebook"></i></a>
                                <a class="dropdown-item" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="dropdown-item" href="#"><i class="fa fa-whatsapp"></i></a>
                                <a class="dropdown-item" href="#"><i class="fa fa-linkedin"></i></a>
                                <a class="dropdown-item" href="#"><i class="fa fa-snapchat-ghost"></i></a>
                                </div>
                            </div>
                          </div>
                        <div><p>1</p></div>
                        </div>

                        <div class="intro-block">
                            <div class="big-letter">E</div>
                            <div class="text">
                                ngineers, medical people, scientific people, have an obsession with solving the problems of reality, once you reach a basic level of wealth in create entire designs with
                            </div>
                        </div>
                        <p className='small'>Engineers, medical people, scientific people, have an obsession with solving the problems of reality, once you reach a basic level of wealth in society, most problems are actually problems of perception.</p>

                        <div className='all-info-det'>
                            <h1>Wider Galleries</h1>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img src="/images/b.jpg" alt="" />
                                </div>
                                <div className='col-md-6'>
                                    <img src="/images/b4.jpg" alt="" />
                                </div>
                                <div className='col-md-12 down'>
                                    <img src="/images/123.jpg" alt="" />
                                </div>
                            </div>
                            <h1>What does Gutenberg change in WordPress</h1>
                            <p>The sole purpose of the Gutenberg editor is to provide an alternative to the current open text editor, not to mention the difficult-to-remember shortcodes, with an agile and visual user interface (UI). So, unlike the current WordPress editor, you don’t have to:</p>
                            <ul class="blog-list">
                                <li>Import images, multimedia and approved files from the media library or add HTML shortcodes;</li>
                                <li>Copy and paste links for embeds;</li>
                                <li>Write shortcodes for specialized assets of different plugins;</li>
                                <li>Create featured images to be added at the top of a post or page;</li>
                            </ul>
                            <div className='down'>
                                <img src="/images/ca.jpg" alt="" />
                            </div>
                            <p className='mt-3'>In short, Gutenberg doesn’t change how WordPress functions. It does, however, change the way website owners (or creators) interact with it. Instead of a whole lot of shortcodes and meta boxes, you will be using simple blocks.</p>
                            <div className='comment'>
                                <p>There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.</p>
                                <small>Ann Johnes</small>
                            </div>
                            <p>The sole purpose of the Gutenberg editor is to provide an alternative to the current open text editor, not to mention the difficult-to-remember shortcodes, with an agile and visual user interface (UI). <br />
                                So, unlike the current WordPress editor, you don’t have to:</p>
                            <p>In short, Gutenberg doesn’t change how WordPress functions. It does, however, change the way website owners (or creators) interact with it. Instead of a whole lot of shortcodes and meta boxes, you will be using simple blocks.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetails
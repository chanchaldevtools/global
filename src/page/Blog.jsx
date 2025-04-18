import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Blog() {
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
            {/* <section>
                <div className="opportunity_div_4 py-5 bg-graphic">
                    <div className="container">
                        <div className="opportunity_div_5">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="opportunity_div_6 text-center p-2">
                                        <img src="/images/opportunity/444331718011657.jpg" className="opportunity_img_1 mb-4" />
                                        <p className="opportunity_p_5">Lucrative Earning Potential</p>
                                        <p className="opportunity_p_6">
                                            As a Lifestyle Entrepreneur, you need tools to maximize your productivity and reach your goals.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="opportunity_div_6 text-center p-2">
                                        <img src="/images/opportunity/870951718011657.jpg" className="opportunity_img_1 mb-4" />
                                        <p className="opportunity_p_5">Lucrative Earning Potential</p>
                                        <p className="opportunity_p_6">
                                            We offer a generous compensation plan that rewards your efforts and ambition. </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="opportunity_div_6 text-center p-2">
                                        <img src="/images/opportunity/153931718011657.jpg" className="opportunity_img_1 mb-4" />
                                        <p className="opportunity_p_5">Freedom To Design Your Life</p>
                                        <p className="opportunity_p_6">
                                            At our company, we understand that lifestyle entrepreneurs value the freedom to </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="opportunity_div_4 py-5 bg-graphic">
                    <div className='container'>
                        <div className="gallery">
                            <div className='row'>
                              <div className='col-lg-3 col-md-6'>
                                   <form class="d-flex">
                                        <button class="btn search" type="submit"><i class="fa fa-search"></i></button>
                                        <input class="form-control mr-sm-2 search" type="search" placeholder="Search . . . ." aria-label="Search" />
                                    </form>
                              </div>
                              <div className='col-lg-9 col-md-6'>
                              <ul class="nav nav-pills mb-4 blog-tabs" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="tab01" data-toggle="pill" href="#tab-pane-1" role="tab" aria-controls="tab-pane-1" aria-selected="true">All</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="tab02" data-toggle="pill" href="#tab-pane-2" role="tab" aria-controls="tab-pane-2" aria-selected="false">All</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="tab03" data-toggle="pill" href="#tab-pane-3" role="tab" aria-controls="tab-pane-3" aria-selected="false">Income Generating activities</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="tab04" data-toggle="pill" href="#tab-pane-4" role="tab" aria-controls="tab-pane-4" aria-selected="false">Lifestyle</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="tab05" data-toggle="pill" href="#tab-pane-5" role="tab" aria-controls="tab-pane-5" aria-selected="false">living the dream </a>
                                </li>
                            </ul>
                              </div>
                            </div>
                           

                            <div class="tab-content my-tab" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="tab-pane-1" role="tabpanel" aria-labelledby="tab01">
                                    <div className='row'>
                                        <div className='col-md-5 gallery-grid'>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog1.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay"><Link to="/blog-details" onClick={() => setMenuOpen(false)}>My Name is John</Link></div>
                                            </div>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog2.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay bottom"><Link to="/">Blog Can Be Everything Nowadays</Link></div>
                                            </div>
                                        </div>
                                        <div className='col-md-2 gallery-grid'>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog3.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay middle"><Link to="/">Gutenberg doesn't change how WordPress works</Link></div>
                                            </div>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog4.jpg" alt="Avatar" class="image" />
                                                <div class="overlay middle"><Link to="/">Design an Amazing Blog WP Site</Link></div>
                                            </div>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog5.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay middle"><Link to="/">WordCamp Europe Opens the Call for Host City 2020</Link></div>
                                            </div>
                                        </div>
                                        <div className='col-md-5 gallery-grid grid-right'>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog7.jpg" alt="Avatar" class="image" />
                                                <div class="overlay"><Link to="/">The editor does not represent the core of WordPress publishing,</Link></div>
                                            </div>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog6.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay bottom"><Link to="/">Three responses to a piece of design</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item prev"><a class="page-link" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item prev"><a class="page-link" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="tab-pane fade" id="tab-pane-2" role="tabpanel" aria-labelledby="tab02">
                                    <div className='row'>
                                        <div className='col-md-5 gallery-grid'>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog1.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay"><Link to="/">My Name is John</Link></div>
                                            </div>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog2.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay bottom"><Link to="/">Blog Can Be Everything Nowadays</Link></div>
                                            </div>
                                        </div>
                                        <div className='col-md-2 gallery-grid'>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog3.jpeg" alt="Avatar" class="image" />
                                                <div class="overlay middle"><Link to="/">Gutenberg doesn't change how WordPress works</Link></div>
                                            </div>
                                        </div>
                                        <div className='col-md-5 gallery-grid grid-right'>
                                            <div class="blog_single">
                                                <img src="/images/blog/blog7.jpg" alt="Avatar" class="image" />
                                                <div class="overlay"><Link to="/">The editor does not represent the core of WordPress publishing,</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item prev"><a class="page-link" href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item prev"><a class="page-link" href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="tab-pane fade" id="tab-pane-3" role="tabpanel" aria-labelledby="tab03">Contact 1 content...</div>
                                <div class="tab-pane fade" id="tab-pane-4" role="tabpanel" aria-labelledby="tab04">Contact 2 content...</div>
                                <div class="tab-pane fade" id="tab-pane-5" role="tabpanel" aria-labelledby="tab05">Contact 3 content...</div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
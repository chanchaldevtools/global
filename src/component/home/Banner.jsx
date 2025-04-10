import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Banner = () => {
    const videoRef = useRef(null);  
    const playButtonRef = useRef(null);  

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            video.classList.add('video-begin');  
            playButtonRef.current.querySelector("i.fa-play").style.display = "none";  
            playButtonRef.current.querySelector("i.fa-pause").style.display = "inline"; 
        } else {
            video.pause();
            video.classList.remove('video-begin');  
            playButtonRef.current.querySelector("i.fa-play").style.display = "inline";  
            playButtonRef.current.querySelector("i.fa-pause").style.display = "none"; 
        }
    };
    const initializeSlider = () => {
        if (window.$ && window.$().flexslider) {
            const $ = window.$;
            const $introSlider = $(".page_slider .flexslider");
            $introSlider.each(function () {
                const $currentSlider = $(this);
                if ($currentSlider.data('flexslider')) {
                    $currentSlider.flexslider('destroy');
                }
                const data = $currentSlider.data();
                const nav = data.nav !== undefined ? data.nav : true;
                const dots = data.dots !== undefined ? data.dots : true;
                $currentSlider.flexslider({
                    video: true,
                    auto: false, 
                    animation: "fade",
                    pauseOnHover: true,
                    useCSS: true,
                    controlNav: dots,
                    directionNav: nav,
                    prevText: "",
                    nextText: "",
                    smoothHeight: false,
                    slideshow: false,
                });
            });
        }
    };
    useEffect(() => {
        initializeSlider();
    }, []); 


    useEffect(() => {
        let timeoutId;
        const navOrder = [1, 2, 3]; // Click order: 1 → 2 → 3 → 1 → ...
        const delays = [38000, 7000, 7000]; // 37s, 6s, 6s
        let currentIndex = 0;
    
        const clickNextNav = () => {
            const navIndex = navOrder[currentIndex];
            const delay = delays[currentIndex];
    
            const navDot = document.querySelector(`.flex-control-nav li:nth-child(${navIndex}) a`);
            if (navDot) {
                navDot.click();
              
            }
    
            // Schedule next click
            timeoutId = setTimeout(() => {
                currentIndex = (currentIndex + 1) % navOrder.length; // Cycle 0→1→2→0→1→2...
                clickNextNav(); // Repeat
            }, delay);
        };
    
        clickNextNav(); // Start the sequence
    
        // Cleanup
        return () => clearTimeout(timeoutId);
    }, []);

  return (
    <section className="page_slider">
    <div className="flexslider vertical home_slider">
        <ul className="slides">
        <li className="ds s-overlay cover-image text-center">
                <span className="social-icons animate" data-animation="fadeInUp">
                    <a href="#" className="fa fa-facebook bg-light border-icon rounded-icon"
                        title="facebook"></a>
                    <a href="#" className="fa fa-twitter bg-light border-icon rounded-icon"
                        title="twitter"></a>
                    <a href="#" className="fa fa-google-plus bg-light border-icon rounded-icon"
                        title="google"></a>
                </span>
                <video muted loop ref={videoRef}
        playsInline
        autoPlay
        
        preload="auto"
        controls={false}>
                    <source src="/images/bg-banner-21mb.mp4"  data-time="74" type="video/mp4"
                        id="vid1" loop/>
                </video> 
                <img src="/images/banner-1.webp" alt="img"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intro_layers_wrapper intro_text_bottom">
                                <div className="intro_layers">
                                    <div className="intro-layer">
                                    
                                    </div>
                                    <div className="intro-layer mt-10">
                                        <h2><span className="semibold">Empowering Driven</span> Individuals To Live their
                                        <span className="semibold"> Best Life</span></h2>
                                    </div>
                                    <div className="divider-35"></div>
                                    <div className="divider-xl-50"></div>
                                    <div className="divider-30 hidden-xl"></div>
                                    <div className="button">
                                        <ul>
                                            <li className="button-li">
                                                <a href="#"> Join Now
                                                    <span></span><span></span><span></span><span></span>
                                                   &nbsp;<i className="fa fa-arrow-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="intro-layer">
                                                <button className="btn-play" id="click_btnnn" ref={playButtonRef} onClick={togglePlayPause}>
                                                    <i className="fa fa-play"></i>
                                                    <i className="fa fa-pause" style={{ display: 'none' }}></i>
                                                </button>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
    
            <li className="ds s-overlay cover-image text-center">
                <span className="social-icons animate" data-animation="fadeInUp">
                    <a href="#" className="fa fa-facebook bg-light border-icon rounded-icon"
                        title="facebook"></a>
                    <a href="#" className="fa fa-twitter bg-light border-icon rounded-icon"
                        title="twitter"></a>
                    <a href="#" className="fa fa-google-plus bg-light border-icon rounded-icon"
                        title="google"></a>
                </span>
                <img src="/images/slide02.jpg" alt="img"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intro_layers_wrapper intro_text_bottom">
                                <div className="intro_layers">
                                    <div className="intro-layer mt-10">
                                        <h2><span className="semibold">It Feels Good</span> to Be Lost In
                                            The Right <span className="semibold">Direction</span></h2>
                                    </div>
                                    <div className="divider-35"></div>
                                    <div className="divider-xl-50"></div>
                                    <div className="divider-30 hidden-xl"></div>
                                    <div className="button">
                                        <ul>
                                            <li className="button-li">
                                                <a href="#"> Join Now
                                                    <span></span><span></span><span></span><span></span>
                                                    <i className="fa fa-arrow-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="ds s-overlay cover-image text-center">
                <span className="social-icons animate" data-animation="fadeInUp">
                    <a href="#" className="fa fa-facebook bg-light border-icon rounded-icon"
                        title="facebook"></a>
                    <a href="#" className="fa fa-twitter bg-light border-icon rounded-icon"
                        title="twitter"></a>
                    <a href="#" className="fa fa-google-plus bg-light border-icon rounded-icon"
                        title="google"></a>
                </span>
                <img src="/images/pbg-2.png" alt="img"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intro_layers_wrapper intro_text_bottom">
                                <div className="intro_layers">
                                    <div className="intro-layer mt-10">
                                        <h2><span className="semibold">Blending fun</span> with professionalism every step of the <span className="semibold">way</span></h2>
                                    </div>
                                    <div className="divider-35"></div>
                                    <div className="divider-xl-50"></div>
                                    <div className="divider-30 hidden-xl"></div>
                                    <div className="button">
                                        <ul>
                                            <li className="button-li">
                                                <a href="#"> Join Now
                                                    <span></span><span></span><span></span><span></span>
                                                    &nbsp;<i className="fa fa-arrow-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <style>
                {`
                .animate {
                    visibility: visible !important;
                    animation: fadeInUp 0.5s ease-in-out;
                }
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
</section>
  )
}

export default Banner
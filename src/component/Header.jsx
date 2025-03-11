import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import FetchLocationData from './FetchLocationData';
import GoogleTranslate from './GoogleTranslate';

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="header_absolute ds home">
            <section className='top-bar'>
                <div className="row">
                    <div className="col-6">
                        <FetchLocationData />
                    </div>
                    <div className="col-6 text-center">
                        <GoogleTranslate />
                    </div>
                </div>
            </section>

            <section className="page_topline ds">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 col-xl-4 p-0">
                            <div className="media">
                                <div className="media-body">
                                    <Link to="/" className="logo">
                                        <img src="/images/logo1-white.png" alt="img" className="nav-upper-header1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Header with dynamic class */}
            <header className={`page_header ls justify-nav-center ${menuOpen ? 'mobile-active' : ''}`}>
                <div className="container-fluid">
                    <div className="row align-items-lg-end align-items-center">
                        <div className="col-2 col-lg-2 col-md-2 p-0">
                            <Link to="/" className="logo main_logo_pd">
                                <img src="/images/logo2.jpg" alt="img" className="logo-color" />
                            </Link>
                        </div>
                        <div className="col-lg-10 col-1 p-0">
                            <nav className="top-nav">
                                <ul className="nav new-nav other_manu">
                                    <li className={location.pathname === '/' ? 'active' : ''}>
                                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                                    </li>
                                    <li className={location.pathname === '/membership' ? 'active' : ''}>
                                        <NavLink to="/membership" onClick={() => setMenuOpen(false)}>Membership</NavLink>
                                    </li>
                                    <li>
                                        <Link to="/opportunity" onClick={() => setMenuOpen(false)}>Opportunity</Link>
                                    </li>
                                    <li>
                                        <Link to="/training" onClick={() => setMenuOpen(false)}>Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
                                    </li>
                                    <li className="new-nav-li">
                                        <Link to="https://97702a.myshopify.com/password" onClick={() => setMenuOpen(false)}>O2 Global Gear</Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
                                    </li>
                                </ul>
                                <ul className="nav new-nav joinus_login m-0">
									<li className="text-center p-0 border_right">
										<Link to="https://o2ix.com/customer" className=" btn_001" onClick={() => setMenuOpen(false)}>
											Join Now
										</Link>
									</li>
									<li className="text-center p-0">
										<Link to="https://o2ix.com/customer" className=" btn_001" onClick={() => setMenuOpen(false)}>
											Login
										</Link>
									</li>
								</ul>



                            </nav>
                        </div>
                    </div>
                </div>

                {/* Toggle Button with Dynamic Class */}
                <span className={`toggle_menu ${menuOpen ? 'mobile-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                </span>
            </header>
        </div>
    );
};

export default Header;

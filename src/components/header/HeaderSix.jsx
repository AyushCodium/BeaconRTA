import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function HeaderSix() {
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`header--sticky header-one header-four header-five header-six seven ${isSticky ? 'sticky' : ''}`}>
                <div className="header-top header-top-one header-top-four header-top-five header-top-six seven">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="top-left">
                                    Are you ready to grow up your business?{" "}
                                    <Link to={'/contact'}>
                                        Contact Us <i className="far fa-arrow-right" />
                                    </Link>
                                </p>
                            </div>
                            <div className="col-lg-6 right-h-three">
                                <div className="header-top-right">
                                    <div className="single-right email">
                                        <i className="fas fa-envelope" />
                                        <Link to={'#'}>contact@beaconrta.co.in</Link>
                                    </div>
                                    <div className="single-right call">
                                        <i className="far fa-phone-volume" />
                                        <span>Call Us:</span>
                                        <Link to={'#'}>+210-9856988</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main-one bg-white header-main-five six">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6">
                                <div className="thumbnail">
                                    {/*<Link href="index.html">
                                        <img src="assets/beacon.png" width={180} alt="finbiz-logo" />
                                    </Link>*/}
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-6">
                                <div className="main-header main-header-four main-header-five main-header-six seven">
                                    <Nav />
                                    <div className="button-area">
                                        <div className="search-input-area">
                                            <div className="container">
                                                <div className="search-input-inner">
                                                    <div className="input-div">
                                                        <input
                                                            id="searchInput1"
                                                            className="search-input"
                                                            type="text"
                                                            placeholder="Search by keyword or #"
                                                        />
                                                        <button>
                                                            <i className="far fa-search" />
                                                        </button>
                                                    </div>
                                                    <div id="close" className="search-close-icon">
                                                        <i className="far fa-times" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            to={'#'}
                                            className="rts-btn btn-primary btn-primary-4 six ml--20 ml_sm--5 header-one-btn quote-btn"
                                        >
                                            Book a Meeting
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <style>{`
                /* Adjust header heights while preserving existing classes */
                .header-top {
                    padding: 5px 0 !important;
                }

                .header-main-one .thumbnail img {
                    max-height: 40px;
                    width: auto;
                }

                .main-header .button-area .rts-btn {
                    padding: 8px 15px !important;
                }

                /* Maintain responsive behavior */
                @media (max-width: 768px) {
                    .header-main-one {
                        padding: 8px 0 !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default HeaderSix;
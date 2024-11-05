import React from 'react'
import { Link } from 'react-router-dom';
function FooterSix() {
    return (
        <div>
            {/* rts footer area start */}
            <div className="rts-footer-area footer-one rts-section-gapTop bg-footer-one">
                <div className="container bg-shape-f1">
                    {/* footer call to action area */}
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-cta-wrapper">
                                <div className="background-cta six">
                                    <div className="row">
                                        {/* cta-left */}
                                        <div className="col-lg-6">
                                            <div className="cta-left-wrapepr">
                                                <p className="cta-disc">Connect With Us</p>
                                                <h3 className="title">Drop Your Email</h3>
                                            </div>
                                        </div>
                                        {/* cta left end */}
                                        <div className="col-lg-6">
                                            {/* cta right */}
                                            <form className="cta-input-arae">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter Email Address"
                                                    required=""
                                                />
                                                <button type="submit" className="rts-btn btn-primary six">
                                                    Subscribe Now
                                                </button>
                                            </form>
                                            {/* cta right End */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer call to action area End */}
                    {/* rts footer area */}
                    <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
                        {/* footer mid area */}
                        <div className="col-xl-5 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized mid-bg">
                                <div className="wized-title">
                                    <h5 className="title">For Investors</h5>
                                    <img
                                        src="assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Public Issues
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Right Issues
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Debt Issues
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Alternative Investment Funds
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Securitization Units
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="links">
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Mutual Funds
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> KYC & Due Diligence
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized six">
                                <div className="wized-title">
                                    <h5 className="title">Quick Links</h5>
                                    <img
                                        src="assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Career with Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> FAQs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6 col-sm-12 col-12">
                            <div className="footer-one-single-wized mid-bg">
                                <div className="wized-title">
                                    <h5 className="title">For Issuers</h5>
                                    <img
                                        src="assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Issue Management
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Dematerialization
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Investor Meet
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> DSC
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Tripartite Agreement
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="links">
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Data Management
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'#'}>
                                                <i className="far fa-arrow-right" /> Advisory
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* rts footer area End */}
                </div>
                {/* copyright area start */}
                <div className="rts-copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <p>© {new Date().getFullYear()}. Codium Techlabs Pvt. Ltd.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright area end */}
            </div>
            {/* rts footer area end */}

        </div>
    )
}

export default FooterSix
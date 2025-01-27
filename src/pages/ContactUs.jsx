/* eslint-disable no-unused-vars */

import React from 'react';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "../inner/Breadcrumb";
import HeaderSix from "../components/header/HeaderSix";
import FooterSix from '../components/footer/FooterSix';


function ContactUs() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];
    return (
        <div className=''>

            <HeaderSix />

            <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

            {/* contact single area start */}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/01.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/01.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Call Us 24/7</span>
                                        <Link to={'tel:+18475555555'}>
                                            <h5>+91 0000000000</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/02.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/02.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Make A Quote</span>
                                        <Link to={'mailto:someone@example.com'}>
                                            <h6>contact@beaconrta.co.in</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/03.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/03.svg" alt="" width={100} />
                                    </div>
                                    <div className="info">
                                        <span>Service Station</span>
                                        <Link to={'#'}>
                                            <h6>Akshar Business Park, Plot No. 3, Vashi, Navi Mumbai.</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                    </div>
                </div>
            </div>
            {/* conact single area end */}
            {/* bizup map area start */}
            <div className="rts-contact-map-area">
                <div className="contaciner-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-map-area-fluid">
                                <iframe
                                    title='address'
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.660133475581!2d73.0133457!3d19.0786749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c168b615608d%3A0xc4724ace45d87091!2sAkshar%20Business%20Park!5e0!3m2!1sen!2sin!4v1730718039427!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bizup map area end */}
            {/* conact us form fluid start */}
            <div className="rts-contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Get In Touch</p>
                                    <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required=""
                                            />
                                        </div>
                                        <input type="text" name="subject" placeholder="Your Subject" />
                                        <textarea
                                            placeholder="Type Your Message"
                                            name="message"
                                            defaultValue={""}
                                        />
                                        <button type="submit" className="rts-btn btn-primary">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* conact us form fluid end */}

            <FooterSix />

        </div>
    )
}

export default ContactUs
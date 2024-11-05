/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import { Link } from 'react-router-dom';
import TeamTwo from "../components/team/TeamTwo";
import FooterOne from "../components/footer/FooterOne";

import Accordion from 'react-bootstrap/Accordion';
import HeaderSix from '../components/header/HeaderSix';
import FooterSix from '../components/footer/FooterSix';



function AboutOffice() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'About Us' },
        { label: 'Office Network' },
    ];
    // const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Function to open the video overlay
    // const openVideo = (e) => {
    //     e.preventDefault();
    //     setIsVideoOpen(true);
    // };

    // Function to close the video overlay
    // const closeVideo = (e) => {
    //     e.preventDefault();
    //     setIsVideoOpen(false);
    // };

    // // Effect to handle the escape key for closing the video overlay
    // useEffect(() => {
    //     // const handleKeyUp = (e) => {
    //     //     if (e.keyCode === 27) {
    //     //         setIsVideoOpen(false);
    //     //     }
    //     // };

    //     // Add event listener for keyup
    //     document.addEventListener('keyup', handleKeyUp);

    //     // Cleanup function to remove event listener on component unmount
    //     return () => {
    //         document.removeEventListener('keyup', handleKeyUp);
    //     };
    // }, []);
    return (
        <div className=''>

            <HeaderSix />
            <Breadcrumb title="Office Network" breadcrumbs={breadcrumbs} />
            {/* rts-team details area Start*/}
            <div className="rts-team-details rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                                <iframe
                                    title='address'
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.660133475581!2d73.0133457!3d19.0786749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c168b615608d%3A0xc4724ace45d87091!2sAkshar%20Business%20Park!5e0!3m2!1sen!2sin!4v1730718039427!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    width="600" 
                                    height="500"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 pl--35 pl_sm--15">
                            <div className="details-right-inner">
                                <div className="title-area">
                                    <span className="pre-title">Bandra Kurla Complex</span>
                                    <h3 className="title">The Metropolitan</h3>
                                </div>
                                <p className="disc">
                                    Unit No. F-1017, 1st Floor, F Wing, Phase I, Akshar Business Park, Plot No. 3, Sector 25, Vashi, Navi Mumbai – 400 703.
                                </p>
                                <div className="team-details-support-wrapper">
                                    <i className="far fa-envelope" />
                                    <div className="support-innner">
                                        <span>Email Address</span>
                                        <Link to={'#'}>
                                            <h5 className="title">contact@beaconrta.co.in</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="team-details-support-wrapper">
                                    <i className="fal fa-phone-volume" />
                                    <div className="support-innner">
                                        <span>Phone Number</span>
                                        <Link to={'#'}>
                                            <h5 className="title">+91 0000000000</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="team-details-support-wrapper">
                                    <i className="far fa-map-marker-alt" />
                                    <div className="support-innner">
                                        <span>Office Location</span>
                                        <Link to={'#'}>
                                            <h5 className="title">Akshar Business Park, Plot No. 3, Vashi, Navi Mumbai.</h5>
                                        </Link>
                                    </div>
                                </div>
                                <Link to={'#'} className="rts-btn btn-primary">
                                    {" "}
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-team details area ENd */}
            


            {/* rts services area start */}
            <div className="rts-service-area rts-section-gapBottom">
                <div className="container-fluid service-main about-service-width-controler">
                    <div className="row">
                        <div className="cta-one-bg col-12">
                            <div className="cta-one-inner">
                                <div className="cta-left">
                                    <h3 className="title animated fadeIn">
                                        Let’s discuss about how we can help make your business better
                                    </h3>
                                </div>
                                <div className="cta-right">
                                    <Link className="rts-btn btn-white" to={'#'}>
                                        Lets Work Togather
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts services area End */}

            <FooterSix />

        </div>
    )
}

export default AboutOffice
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



function OurService() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'About Us' },
        { label: 'Background' }
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
            <Breadcrumb title="Background" breadcrumbs={breadcrumbs} />
            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-4">
                            <div className="about-image-v-inner">
                                <div className="image-area">
                                    <img
                                        className="img-1"
                                        src="assets/images/about/main/about-03.jpg"
                                        alt="BUsiness_image"
                                    />
                                    {/*<div className="goal-button-wrapper">
                                        <Link to={'#'} className="vedio-icone">
                                            <span id="play-video" className="video-play-button" onClick={openVideo}>
                                                 <img
                                                    src="assets/images/about/shape/play-btn.png"
                                                    alt="Play btn"
                                                /> 
                                                <span />
                                            </span>
                                            {isVideoOpen && (
                                                <div id="video-overlay" className="video-overlay open">
                                                    <Link className="video-overlay-close" to={'#'} onClick={closeVideo}>
                                                        ×
                                                    </Link>
                                                    <iframe
                                                        width="560"
                                                        height="315"
                                                        src="https://www.youtube.com/embed/6stlCkUDG_s"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}
                                        </Link>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-progress-inner">
                                <div className="title-area">
                                    <span>ABOUT BEACON RTA</span>
                                    <h2 className="title">
                                        Background
                                    </h2>
                                </div>
                                {/* inner start */}
                                <div className="inner">
                                    <p className="disc">
                                        Dapibus curae risus rutrum curabitur nunc sociis nullam nisl,
                                        aliquet quis iaculis scelerisque primis massa imperdiet, dis
                                        senectus blandit aptent nulla cubilia sodales convallis tortor
                                        pellentesque nulla.
                                    </p>
                                    {/*<div className="rts-progress-one-wrapper">
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Business Strategy</p>
                                                <span className="persectage">70%</span>
                                            </div>
                                            <div className="meter cadetblue">
                                                <span data-progress={70} style={{ width: 300 }} />
                                            </div>
                                        </div>
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Company Strength</p>
                                                <span className="persectage">93%</span>
                                            </div>
                                            <div className="meter">
                                                <span data-progress={93} style={{ width: 400 }} />
                                            </div>
                                        </div>
                                    </div>*/}
                                    <Link to={'#'} className="rts-btn btn-primary">
                                        Make an Appointment
                                    </Link>
                                </div>
                                {/* end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about us section end */}


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

export default OurService
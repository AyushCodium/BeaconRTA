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
import FaqOne from '../components/faq/FaqOne';



function Faq() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'FAQ' },
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
            <Breadcrumb title="FAQ" breadcrumbs={breadcrumbs} />

            <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="faq-two-inner">
                                <div className="title-area-faq">
                                    <span className="sub">FAQs</span>
                                    <h4 className="title">
                                        Shares and other Securities
                                    </h4>
                                </div>
                                <div className="faq-accordion-area">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span>01. </span> What should i included my personal
                                                details?</Accordion.Header>
                                            <Accordion.Body>
                                                Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <span>02. </span> Where i can find my business growth
                                                result?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Neque partrient nascetur facilisis suscipit ridiculus agna
                                                lobortis imperdiet vivamus est aliquam euismod nector quam
                                                convallis ornare justo service lifereu visionary sources
                                                unleash online businesss solutions
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                <span>03. </span> Did you get any business consultant?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Neque partrient nascetur facilisis suscipit ridiculus agna
                                                lobortis imperdiet vivamus est aliquam euismod nector quam
                                                convallis ornare justo service lifereu visionary sources
                                                unleash online businesss solutions
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSix />

        </div>
    )
}

export default Faq
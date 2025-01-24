import React from 'react';
import HeaderSix from '../components/header/HeaderSix';
import FooterSix from '../components/footer/FooterSix';
import Breadcrumb from "../inner/Breadcrumb";
import Accordion from 'react-bootstrap/Accordion';
import Chatbot from '../components/ChatBot';
import faqData from '../data/faq-data';

function Faq() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'FAQ' },
    ];

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

            {/* Add Chatbot while preserving existing layout */}
            <Chatbot faqData={faqData} />

            <FooterSix />
        </div>
    );
}

export default Faq;
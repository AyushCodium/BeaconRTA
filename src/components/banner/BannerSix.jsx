import React from 'react'

function BannerSix() {
    return (
        <div>
            {/* rts banner darea start */}
            <div className="rts-banner-area banner-bg-h7">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            {/* bannerq inner six */}
                            <div className="rts-banner-wrapper-seven">
                                <p className="pre-title">
                                    <span>Welcome!</span> License awaited soon ......
                                </p>
                                <h1 class="banner-title">
                                    Trustworthy <br />
                                    Reliable <span>Ethical </span>
                                </h1>
                                <p className="disc">
                                    At Beacon RTA, we bring trust and innovation to investor services in India. 
                                    With a focus on security, efficiency, and transparency, 
                                    we streamline every transaction to empower companies and investors alike.
                                </p>
                                <div className="button-area">
                                    <a href="#" className="rts-btn btn-primary six mr--30">
                                        Contact Us
                                    </a>
                                    <a href="#" className="rts-btn btn-primary deactive">
                                        Free Consultant
                                    </a>
                                </div>
                            </div>
                            {/* bannerq inner six ENd */}
                        </div>
                        <div className="col-xl-5">
                            <div className="rts-contact-form-area six">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="rts-contact-fluid">
                                                <div className="rts-title-area contact-fluid text-center">
                                                    <h2 className="title">Let’s Get in Touch</h2>
                                                </div>
                                                <div className="form-wrapper">
                                                    <div id="form-messages" />
                                                    <form id="contact-form" action="mailer.php" method="post">
                                                        <div className="name-email">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="First Name"
                                                                required=""
                                                            />
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Last Name"
                                                                required=""
                                                            />
                                                        </div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Your Email"
                                                            required=""
                                                        />
                                                        <input
                                                            type="number"
                                                            name="number"
                                                            placeholder="Numbers"
                                                            required=""
                                                        />
                                                        {/*<select name="country" id="country">
                                                            <option value="country">Country</option>
                                                            <option value="">USA</option>
                                                            <option value="">UK</option>
                                                            <option value="">BRAZIL</option>
                                                        </select>*/}
                                                        <textarea
                                                            placeholder="Type Your Message"
                                                            name="message"
                                                            defaultValue={""}
                                                        />
                                                        <button type="submit" className="rts-btn btn-primary">
                                                            Submit
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-banner-6">
                    <img
                        src="assets/images/banner/shape/shape-h6.png"
                        alt="shape-images"
                        data-sal-delay={150}
                        data-sal="slide-right"
                        data-sal-duration={800}
                    />
                </div>
            </div>
            {/* rts banner darea end */}
        </div>
    )
}

export default BannerSix
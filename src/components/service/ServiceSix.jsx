import React from 'react'
import { Link } from 'react-router-dom';
function    ServiceSix() {
    return (
        <div>
            {/* rts-service area start */}
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p className="pre-title">Our Services</p>
                                <h2 className="title">Effective Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            {/* single service for home six */}
                            <div className="single-service-home-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/19.svg" alt="" />
                                </div>
                                <div className="inner">
                                    <h5 className="title">Investor Services</h5>
                                    <p className="disc" style={{height: '16rem'}}>
                                    A gateway for investors to check application status in Public/Rights/Bond Issues, and access the Download Manager.
                                    </p>
                                    <Link to={'/'} className="rts-btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            {/* single service for home six End */}
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            {/* single service for home six */}
                            <div className="single-service-home-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/20.svg" alt="" />
                                </div>
                                <div className="inner">
                                    <h5 className="title">Client <br /> Services</h5>
                                    <p className="disc" style={{height: '16rem'}}>
                                    A dedicated self-service section for clients to manage InSta, Digital Signatures, and Download Manager.
                                    </p>
                                    <Link to={'/'} className="rts-btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            {/* single service for home six End */}
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            {/* single service for home six */}
                            <div className="single-service-home-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/21.svg" alt="" />
                                </div>
                                <div className="inner">
                                    <h5 className="title">Information Corner</h5>
                                    <p className="disc" style={{height: '16rem'}}>
                                    Explore our esteemed clients and stay updated with the latest information.
                                    </p>
                                    <Link to={'/'} className="rts-btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            {/* single service for home six End */}
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            {/* single service for home six */}
                            <div className="single-service-home-six">
                                <div className="icon">
                                    <img src="assets/images/service/icon/21.svg" alt="" />
                                </div>
                                <div className="inner">
                                <h5 className="title">Augmented Offerings</h5>
                                    <p className="disc" style={{height: '16rem'}}>
                                    Over three decades of strong client relationships in registry services has led to demand for expanded offerings.
                                    </p>
                                    <Link to={'/'} className="rts-btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            {/* single service for home six End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-service area end */}
        </div>
    )
}

export default ServiceSix
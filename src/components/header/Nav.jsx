import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li>
                        <Link className="nav-item" to={'/'} >
                            Home
                        </Link>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" to={'#'}>
                            About Us
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to={'/about-us-background'}>Background</Link>
                            </li>
                            <li>
                                <Link to={'/about-us-infrastructure'}>Infrastructure</Link>
                            </li>
                            <li>
                                <Link to={'/about-us-office'}>Office Network</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" to={'#'}>
                            Services
                        </Link>
                        <ul className="submenu menu-link">
                            <li className="menu-item">
                                <Link className="tag" to={'#'}>
                                    A. For Investors
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={'/'}>Public Issues</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Right Issues</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Debt Issues</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Alternative Investment Funds</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Securitization Units</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Mutual Funds</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>KYC & Due Diligence</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <Link className="tag" to={'#'}>
                                    B. For Issuers
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={'/'}>Issue Management</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>
                                            Dematerialization
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>
                                            Investor Meet
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>
                                            DSC
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>
                                            Tripartite Agreement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>
                                            Data Management
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link className="nav-link" to={'#'}>
                            Resources
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to={'/contactus'}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={'/career-with-us'}>Career with Us</Link>
                            </li>
                            <li>
                                <Link to={'/faq'}>FAQs</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
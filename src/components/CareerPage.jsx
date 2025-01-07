import React, { useState } from 'react';
import HeaderSix from "../components/header/HeaderSix";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "../inner/Breadcrumb";
import careers from '../data/careers.json';
import { Briefcase, MapPin, Clock, Calendar, ChevronRight } from 'lucide-react';

function CareersPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Careers' }
    ];

    const categories = ['All', 'Senior Management', 'Middle Management', 'Operations', 'Technology', 'Client Services'];

    const filteredJobs = selectedCategory === 'All' 
        ? careers 
        : careers.filter(job => job.category === selectedCategory);

    return (
        <div>
            <HeaderSix />
            <Breadcrumb title="Career Opportunities" breadcrumbs={breadcrumbs} />

            <div className="career-section rts-section-gap">
                <div className="container">
                    {/* Header Section */}
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-title display-4 mb-3">Join Our Team</h2>
                            <p className="lead text-muted">Be part of India's leading Registrar and Transfer Agent, where we're shaping the future of shareholder services through innovation and excellence.</p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Sidebar */}
                        <div className="col-lg-4 order-lg-1 order-2">
                            <div className="career-sidebar">
                                {/* Categories Filter */}
                                <div className="filter-card bg-white rounded-lg shadow-sm p-4 mb-4">
                                    <h5 className="card-title border-bottom pb-3 mb-3">Job Categories</h5>
                                    <div className="category-list">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`category-btn d-flex align-items-center justify-content-between w-100 p-3 mb-2 rounded ${
                                                    selectedCategory === category ? 'active' : ''
                                                }`}
                                            >
                                                <span>{category}</span>
                                                <ChevronRight className="category-icon" size={18} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Box */}
                                <div className="contact-card bg-primary text-white rounded-lg p-4">
                                    <h5 className="card-title mb-3">Have Questions?</h5>
                                    <p className="mb-4 text-white">We're here to help you with any questions about opportunities at our company.</p>
                                    <Link
                                        to="/contact"
                                        className="btn btn-light w-100"
                                    >
                                        Contact HR Team
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Job Listings */}
                        <div className="col-lg-8 order-lg-2 order-1">
                            {filteredJobs.map((job) => (
                                <div key={job.id} className="job-card bg-white rounded-lg shadow-sm p-4 mb-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <span className="badge bg-primary-subtle text-primary mb-2">
                                                {job.category}
                                            </span>
                                            <h3 className="job-title h4 mb-3">{job.title}</h3>
                                            
                                            <div className="job-meta d-flex flex-wrap gap-3 mb-3">
                                                <div className="d-flex align-items-center text-muted">
                                                    <MapPin size={16} className="me-2" />
                                                    {job.location}
                                                </div>
                                                <div className="d-flex align-items-center text-muted">
                                                    <Briefcase size={16} className="me-2" />
                                                    {job.employmentType}
                                                </div>
                                                <div className="d-flex align-items-center text-muted">
                                                    <Clock size={16} className="me-2" />
                                                    {job.experience}
                                                </div>
                                            </div>
                                            
                                            <p className="job-description text-muted mb-3">
                                                {job.description}
                                            </p>
                                        </div>
                                        
                                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                                            <div className="d-flex align-items-center justify-content-md-end mb-3">
                                                <Calendar size={16} className="me-2 text-muted" />
                                                <small className="text-muted">Posted: {job.publishedDate}</small>
                                            </div>
                                            <Link 
                                                to={`/careers/${job.id}`}
                                                className="btn btn-primary w-100"
                                            >
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .career-section {
                    background-color: #f8f9fa;
                }

                .section-title {
                    font-weight: 600;
                    color: #2d3748;
                }

                .career-sidebar {
                    position: sticky;
                    top: 20px;
                }

                .filter-card {
                    border: 1px solid rgba(0,0,0,0.1);
                }

                .category-btn {
                    border: none;
                    background: transparent;
                    color: #4a5568;
                    transition: all 0.3s ease;
                }

                .category-btn:hover {
                    background-color: #e9ecef;
                }

                .category-btn.active {
                    background-color: #e9ecef;
                    color: #2b6cb0;
                    font-weight: 500;
                }

                .category-icon {
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all 0.3s ease;
                }

                .category-btn:hover .category-icon,
                .category-btn.active .category-icon {
                    opacity: 1;
                    transform: translateX(0);
                }

                .job-card {
                    border: 1px solid rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                }

                .job-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 
                               0 2px 4px -1px rgba(0,0,0,0.06);
                }

                .job-title {
                    color: #2d3748;
                    font-weight: 600;
                }

                .job-meta {
                    font-size: 0.9rem;
                }

                .badge {
                    font-weight: 500;
                    padding: 0.5em 1em;
                }

                .contact-card {
                    background: linear-gradient(45deg, #2b6cb0, #4299e1);
                }

                @media (max-width: 991.98px) {
                    .career-sidebar {
                        position: static;
                        margin-top: 2rem;
                    }
                }
            `}</style>

            <FooterOne />
        </div>
    );
}

export default CareersPage;
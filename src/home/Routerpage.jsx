/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadTop from '../components/LoadTop';
import BackToTop from '../components/BackToTop';
import HomeSix from "./HomeSix";

// about us pages
import AboutUs from "../pages/about-us/AboutUs";
import AboutUsInfrastructure from "../pages/about-us/AboutUsInfrastructure";
import AboutOffice from "../pages/about-us/AboutOffice";

// inner pages
import OurService from "../inner/OurService";
import ServiceTwo from "../inner/ServiceTwo";
import ServiceThree from "../inner/ServiceThree";
import ServiceDetails from "../inner/ServiceDetails";
import Appoinment from "../inner/Appoinment";

import Faq from '../pages/FAQ';

import PricingPlane from "../inner/PricingPlane";
import TestimonialsOne from "../inner/TestimonialsOne";
import Error from "../inner/Error";
import Project from "../inner/Project";
import ProjectTwo from "../inner/ProjectTwo";
import ProjectThree from "../inner/ProjectThree";
import ProjectFour from "../inner/ProjectFour";
import ProjectFive from "../inner/ProjectFive";
import ProjectDetails from "../inner/ProjectDetails";
import Team from "../inner/Team";
import TeamTwo from "../inner/TeamTwo";
import TeamThree from "../inner/TeamThree";
import TeamFour from "../inner/TeamFour";
import TeamFive from "../inner/TeamFive";
import TeamDetails from "../inner/TeamDetails";
import BlogList from "../inner/BlogList";
import BlogGrid from '../inner/BlogGrid';
import BlogDetails from '../inner/BlogDetails';
import BlogDetailsDefault from '../inner/BlogDetailsDefault';
import ContactUs from '../pages/ContactUs';
import CareersPage from '../pages/CareerPage';





function RouterPage() {
    return (
        <div>
            <Router>
                <LoadTop />
                <Routes>
                    <Route path="/" element={<HomeSix />}></Route>
                    <Route path="/our-service" element={<OurService />}></Route>
                    <Route path="/service-2" element={<ServiceTwo />}></Route>
                    <Route path="/service-3" element={<ServiceThree />}></Route>
                    <Route path="/service-details" element={<ServiceDetails />}></Route>
                    <Route path="/appoinment" element={<Appoinment />}></Route>
                    <Route path="/about-us-background" element={<AboutUs />}></Route>
                    <Route path="/about-us-infrastructure" element={<AboutUsInfrastructure />}></Route>
                    <Route path="/about-us-office" element={<AboutOffice />}></Route>
                    <Route path="/faq" element={<Faq />}></Route>
                    <Route path="/pricing-plane" element={<PricingPlane />}></Route>
                    <Route path="/testimonial-style-1" element={<TestimonialsOne />}></Route>
                    <Route path="/404" element={<Error />}></Route>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/portfolio-style-2" element={<ProjectTwo />}></Route>
                    <Route path="/portfolio-style-3" element={<ProjectThree />}></Route>
                    <Route path="/portfolio-style-4" element={<ProjectFour />}></Route>
                    <Route path="/portfolio-style-5" element={<ProjectFive />}></Route>
                    <Route path="/project-details" element={<ProjectDetails />}></Route>
                    <Route path="/team" element={<Team />}></Route>
                    <Route path="/team-style-2" element={<TeamTwo />}></Route>
                    <Route path="/team-style-3" element={<TeamThree />}></Route>
                    <Route path="/team-style-4" element={<TeamFour />}></Route>
                    <Route path="/team-style-5" element={<TeamFive />}></Route>
                    <Route path="/team-details" element={<TeamDetails />}></Route>
                    <Route path="/blog-list" element={<BlogList />}></Route>
                    <Route path="/career-with-us" element={<CareersPage />}></Route>
                    <Route path="/blog-grid" element={<BlogGrid />}></Route>
                    <Route path="/blog-details" element={<BlogDetails />}></Route>
                    <Route path="/blog/:id" element={<BlogDetails />}></Route>
                    <Route path="/blog-details-default" element={<BlogDetailsDefault />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                </Routes>
                <BackToTop />
            </Router>
        </div>
    )
}

export default RouterPage
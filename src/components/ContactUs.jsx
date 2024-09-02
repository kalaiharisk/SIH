import React, { useState } from 'react';
import { Phone, Email, LocationOn, Badge, Map } from '@mui/icons-material';
import '../assets/ContactUs.css';
import '../assets/HomePage.css';
import azadi from '../assets/images/azadi.png';
import sankar from '../assets/images/delhi-sarkar.png';

import logo from '../assets/images/logo (1).png';

// Import MUI Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const ContactUs = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
        <div className="wrapper light-header design-2" id="maincontent" style={{ fontSize: '14px' }}>
                <div className="top-nav">
                    <div className="container">
                        <div className="left-panel">
                            <a href="#" className="gov-link">
                                Government of NCT of Delhi
                            </a>
                        </div>
                        <div className="right-panel">
                            <a href="/SignIn" className="nav-link">
                                <PersonIcon className="nav-icon" /> Login
                            </a>
                            <a
                                href="#"
                                className="nav-link"
                                onClick={toggleDropdown}
                            >
                                <ShareIcon className="nav-icon" />
                            </a>
                            {isDropdownOpen && (
                                <div className="dropdown-menu social-menu">
                                    <a className="dropdown-item facebook-bg" href="https://www.facebook.com/DelhiGovDigital" target="_blank">
                                        <FacebookIcon className="nav-icon" /> Facebook
                                    </a>
                                    <a className="dropdown-item twitter-bg" href="https://twitter.com/DelhiGovDigital/" target="_blank">
                                        <TwitterIcon className="nav-icon" /> Twitter
                                    </a>
                                    <a className="dropdown-item youtube-bg" href="https://www.youtube.com/c/DelhiGovernmentDG" target="_blank">
                                        <YouTubeIcon className="nav-icon" /> YouTube
                                    </a>
                                    <a className="dropdown-item instagram-bg" href="https://www.instagram.com/delhigovdigital/" target="_blank">
                                        <InstagramIcon className="nav-icon" /> Instagram
                                    </a>
                                </div>
                            )}
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown11" role="button" aria-haspopup="true" aria-expanded="false">
                                    English <i className="fa fa-caret-down"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown11">
                                    <a className="dropdown-item" href="/in/en/Home/ChangeLanguage.html?PageName=%2F">English</a>
                                    <a className="dropdown-item" href="/in/hi/Home/ChangeLanguage.html?PageName=%2F">Hindi</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mid-nav pt-2 pb-2 bg-mid-nav">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="right-logo azadi">
                            <img src={azadi} alt="emblem" />
                        </div>
                        <div className="float-right pt-1 delhi-sarkar">
                            <img src={sankar} alt="150-year" />
                        </div>
                    </div>
                </div>
                <div className="menu-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu_wrapper">
                                    <h4 className="tab-display-block">
                                        National Capital Territory of Delhi
                                    </h4>
                                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="menu-items collapse navbar-collapse" id="collapsibleNavbar">
                                            <ul className="menu-listing w-100 navbar-nav">
                                                <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                                                <li className="nav-item tooltip-container">
                                                    <a href="#" className="nav-link">Services</a>
                                                    <div className="tooltip-content">
                                                        <a className="tooltip-item" href="/Public/Services?q=pABhIqVXL4Urxx0KziIUSQ==">Food & Supply</a>
                                                        <a className="tooltip-item" href="/Public/Services?q=sFdl9dGBMml62W/SCQeVIA==">Health</a>
                                                        <a className="tooltip-item" href="/Public/Services?q=5J+Ict8a5FIA2Kle1OgAYQ==">Transport</a>
                                                        <a className="tooltip-item" href="/Public/Services?q=aQ2ZC/Nfr71jBJwGSQfGeg==">Revenue</a>
                                                        <a className="tooltip-item" href="/Public/Services?q=s11YjoLoZRgEyOQwqU7KKg==">Women & Child Development</a>
                                                    </div>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="/in/en/Public/Departments.html">Citizen's corner</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/in/en/Public/Whoswho.html">Downloads</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/in/en/Public/Feedback.html">Feedback</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="contact-container">
            <h2 className="contact-title">Contact Details at e-District Delhi</h2>
            <section className="contact-content">
                <div className="contact-card">
                    <div className="contact-card-body">
                        <p className="contact-text">
                            The call center is functioning from 09:30 AM to 06:00 PM on all working days except Sunday.
                        </p>
                        <p className="contact-text">
                            <Phone fontSize="small" /> 1031
                        </p>
                        <p className="contact-text">
                            The query/complaints/suggestions are also received through email.
                        </p>
                        <p className="contact-text">
                            <Email fontSize="small" /> edistrict-grievance[at]supportgov[dot]in
                        </p>
                        <ul className="contact-links">
                            <li className="contact-link-item">
                                <a href="https://pgms.delhi.gov.in/" target="_blank" className="contact-btn contact-btn-info">
                                    Click Here
                                </a> for complaint at Public Grievance Management System.
                            </li>
                            <li className="contact-link-item">
                                <a href="https://listeningpostdelhilg.in/AuPages/login.aspx" target="_blank" className="contact-btn contact-btn-warning">
                                    Click Here
                                </a> for complaint at Listening Post of Lieutenant Governor.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contact-card">
                    <h5 className="contact-card-header">Department of Revenue</h5>
                    <div className="contact-card-body">
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> 5, Sham Nath Marg, Civil Lines, Delhi, 110054
                        </p>
                        <ul className="contact-details">
                            <li><Badge fontSize="small" /> Divisional Commissioner</li>
                            <li><Phone fontSize="small" /></li>
                            <li><Email fontSize="small" /></li>
                        </ul>
                        <a className="contact-btn contact-btn-info" href="/Public/ContactDistrictDetail?q=sfdtu2QBQjJs7vCjSi1Fhg==">
                            District Wise Contact
                        </a>
                        <a className="contact-btn contact-btn-warning" href="/Public/ContactSubDivDetail?q=sfdtu2QBQjJs7vCjSi1Fhg==">
                            Subdivision Wise Contact
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <h5 className="contact-card-header">Department of Social Welfare</h5>
                    <div className="contact-card-body">
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> 7th Floor, MSO Building, ITO, I.P Estate New Delhi-110002
                        </p>
                        <ul className="contact-details">
                            <li><Badge fontSize="small" /></li>
                            <li><Phone fontSize="small" /></li>
                            <li><Email fontSize="small" /></li>
                        </ul>
                        <a className="contact-btn contact-btn-info" href="/Public/ContactDistrictDetail?q=JjzAPiUTZ3A4+Z8iHjUfMw==">
                            District Wise Contact
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <h5 className="contact-card-header">Department of Food & Supply</h5>
                    <div className="contact-card-body">
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> K-Block, Vikas Bhavan, I.P. Estate, New Delhi-110002
                        </p>
                        <ul className="contact-details">
                            <li><Badge fontSize="small" /></li>
                            <li><Phone fontSize="small" /> 1967</li>
                            <li><Email fontSize="small" /> cfood[at]nic[dot]in</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-card">
                    <h5 className="contact-card-header">Labour Department</h5>
                    <div className="contact-card-body">
                        <p className="contact-text bold-text">
                            For Registration And Grant of Factory Under The Factories Act, 1948
                        </p>
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> Directorate of Industrial Safety & Health, Labour Department, D-Block, 2nd Floor, 5, Sham Nath Marg, Delhi-110054.
                        </p>
                        <ul className="contact-details">
                            <li><Badge fontSize="small" /> Mr. S. Pandia Rajan – Director (ISH)</li>
                        </ul>
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> OFFICE OF THE LABOUR COMMISSIONER, GOVERNMENT OF N.C.T. OF DELHI, 5, SHAM NATH MARG, DELHI - 110054
                        </p>
                        <ul className="contact-details">
                            <li><Badge fontSize="small" /></li>
                            <li><Phone fontSize="small" /> 155214</li>
                            <li><Email fontSize="small" /> labjlc3[dot]delhi[at]nic[dot]in</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-card">
                    <h5 className="contact-card-header">Women & Child Development Department</h5>
                    <div className="contact-card-body">
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> Maharana Pratap ISBT Building, Kashmere Gate, Delhi - 110006
                        </p>
                        <ul className="contact-details">
                            <li><Badge fontSize="small" /></li>
                            <li><Phone fontSize="small" /></li>
                            <li><Email fontSize="small" /></li>
                        </ul>
                        <a className="contact-btn contact-btn-info" href="/Public/ContactDistrictDetail?q=4NXbg3fCi3VEP0+l5lLSZw==">
                            District Wise Contact
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <h5 className="contact-card-header">Directorate of Higher Education</h5>
                    <div className="contact-card-body">
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> Student Loan and Scholarship Branch (DHE-Trust), Govt. of NCT of Delhi, Ground Floor, B-Block, 5 Sham Nath Marg, Civil Line, Delhi-110054
                        </p>
                        <ul className="contact-details">
                            <li><Email fontSize="small" /> studentloan.delhi@gov.in</li>
                            <li><Phone fontSize="small" /> 1123930517</li>
                            <li><Email fontSize="small" /></li>
                        </ul>
                    </div>
                </div>

                <div className="contact-card">
                    <h5 className="contact-card-header">Department of Welfare of SC/ST</h5>
                    <div className="contact-card-body">
                        <p className="contact-text">
                            <LocationOn fontSize="small" /> GOVERNMENT OF NCT OF DELHI, DEPTT. FOR THE WELFARE OF SC/ST/OBC, B-BLOCK, 2ND FLOOR, VIKAS BHAWAN, I.P.ESTATE NEW DELHI-110002
                        </p>
                        <ul className="contact-details">
                            <li><Badge fontSize="small" /></li>
                            <li><Phone fontSize="small" /></li>
                            <li><Email fontSize="small" /></li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
        </>
    );
};

export default ContactUs;

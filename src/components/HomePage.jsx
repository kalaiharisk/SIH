import React, { useState } from 'react';
import '../assets/HomePage.css';
import about from '../assets/images/about-img.png';
import applyser from '../assets/images/ApplyService.png';
import azadi from '../assets/images/azadi.png';
import sankar from '../assets/images/delhi-sarkar.png';
import download1 from '../assets/images/Download1.png';
import logo from '../assets/images/logo (1).png';
import track1 from '../assets/images/Track1.png';
import verify1 from '../assets/images/Verify1.png';

// Import MUI Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const HomePage = () => {
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
                <div class="worksec py-50" id="worksec">
    <div class="container">
        <div class="row">
            <div class="work-left">
                <h3>About E-District Delhi</h3>
                <p>
                    E-District is a comprehensive and web-enabled service portal through which citizens can access
                    various services
                    provided by the Government. It provides end-to-end integrated solution to various services
                    availed through this portal.
                    By using E-District platform, you can avail various services of the Government at the click of
                    the button.
                    E-District also provides for online verification of various certificates issued by multiple
                    Department
                </p>
                <p>
                    E-District also aims to link the databases of all the Government departments to provide online
                    verification of documents submitted by citizens. The documents of the…
                </p>
                <a href="about" class="viewbtn">Read More</a>
            </div>
            <div class="work-right">
                <img src={about} alt="About E-District Delhi" class="img-fluid" />
            </div>
        </div>
    </div>
</div>
<div className="container-fluid p-0">
    <div className="bg-service pt-50 pb-3">
        <div className="container">
            <div className="our-service">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>Our Services</h3>   
                    </div>
                </div>
                <div className="service owl-carousel owl-nav disabled owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                        <div className="owl-stage">
                            <div className="owl-item">
                                <div className="figure position-relative">
                                    <a href="/Public/TrackApplication">
                                        <img src={track1} alt="Track your Application"/>
                                        <div className="figcaption position-absolute">
                                            <span>Track your Application</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="figure position-relative">
                                    <a href="/Public/VerifyCertificate">
                                        <img src={verify1} alt="Verify your Certificate"/>
                                        <div className="figcaption position-absolute">
                                            <span>Verify your Certificate</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="figure position-relative">
                                    <a href="/Public/DownloadVerifyCertificate">
                                        <img src={download1} alt="Print/Download Certificate"/>
                                        <div className="figcaption position-absolute">
                                            <span>Print/Download Certificate</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="owl-item active">
                                <div className="figure position-relative">
                                    <a href="/Account/Login">
                                        <img src={applyser} alt="Apply Service"/>
                                        <div className="figcaption position-absolute">
                                            <span>Apply Service</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


            </div>
        </>
    );
};

export default HomePage;

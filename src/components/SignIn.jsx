import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSCstyles.css';
import './CommonHelper.css';
import '../assets/Homepage.css'
import logo from '../assets/images/logo (1).png';
// import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import azadi from '../assets/images/azadi.png';
import sankar from '../assets/images/delhi-sarkar.png';

const SignIn = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaCode, setCaptchaCode] = useState('');
    const nav=useNavigate();
    

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase(); // Generate a random string
        setCaptchaCode(code);
    };

    const handleLogin = () => {
        if (captchaInput === captchaCode) {
            alert('Login successful!');
            nav('/services');
            // Proceed with login logic here
        } else {
            alert('Invalid captcha code.');
        }
    };

    const handleReset = () => {
        setUserName('');
        setPassword('');
        setCaptchaInput('');
        generateCaptcha(); // Refresh captcha on reset
    };

    return (
        <>
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
                                                <li className="nav-item"><a className="nav-link" href="/">About Us</a></li>
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
                                                <li className="nav-item"><a className="nav-link" href="/Public/Whoswho">Who's Who</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/Public/Directory">Directory</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/in/en/Public/Departments.html">Departments</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/in/en/Public/Whoswho.html">Media</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/in/en/Public/ContactUs.html">Contact Us</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/in/en/Public/Feedback.html">Feedback</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="row" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <div className="col-md-8" style={{ border: 'white' }}>
                <br />
                <div className="powerwidget darkgreen" style={{ backgroundColor: '#5095DA' }}>
                    <header>
                        <h2><i className="fa fa-sign-in"></i>&nbsp;e-Sevai Services through Common Service Centers (CSC’s)</h2>
                    </header>
                    <div className="inner-spacer">
                        <div className="form-group">
                            <div className="col-md-12">
                                <span style={{ fontSize: 'medium' }}>
                                The Delhi e-District portal is a robust online platform developed by the Delhi government to provide easy access to various citizen-centric services. This portal enables citizens to avail themselves of government services through Common Service Centers (CSCs) located across the city. Delhi has a widespread network of CSCs, ensuring that citizens can conveniently access these services by approaching the nearest center. The list of services provided includes:
                                </span>
                                <div className="col-md-12"></div>
                                <div className="col-md-12"></div>
                                <div className="col-md-12"></div>
                                <div className="col-md-12"></div>
                                <div className="col-md-12"></div>
                                <div className="col-md-12"></div>
                                <div className="col-md-12">
                                    <div className="col-md-6">
                                        <ul>
                                            <li> 01 Issuance of Caste (SC/ST) Certificate

</li>
                                            <li> 02 Nativity certificate </li>
                                            <li> 03 Issuance of Income and Assets Certificate for Economically Weaker Section(EWS)

</li>
                                            <li> 04 First Graduate Certificate </li>
                                            <li> 05 Deserted Woman Certificate </li>
                                            <li> 06 Agricultural Income Certificate </li>
                                            <li> 07 Family Migration Certificate </li>
                                            <li> 08 Unemployment Certificate </li>
                                            <li> 09 Widow Certificate </li>
                                            <li> 10 Certificate for Loss of Educational Records due to disasters </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li> 11 Inter Caste Marriage Certificate </li>
                                            <li> 12 Legal Heir Certificate </li>
                                            <li> 13 Other Backward Classes (OBC) Certificate </li>
                                            <li> 14 Residence certificate </li>
                                            <li> 15 Small / Marginal Farmer Certificate </li>
                                            <li> 16 Solvency Certificate </li>
                                            <li> 17 No Male Child Certificate </li>
                                            <li> 18 Unmarried Certificate </li>
                                            <li> 19 Licence under Pawn Broker Act </li>
                                            <li> 20 Money Lender's Licence </li>
                                        </ul>
                                    </div>
                                    <br />
                                </div>
                                <div className="col-md-12">
                                    <a href="Pages/EsevaiServiceList.aspx" style={{ float: 'right' }}><u>Click here for More Service's Information</u></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <br />
                <div className="powerwidget darkgreen" style={{ backgroundColor: '#5095DA' }}>
                    <header>
                        <h2><i className="fa fa-sign-in"></i>&nbsp;Sign In</h2>
                    </header>
                    <div className="inner-spacer">
                        <div className="form-group">
                            <div className="col-md-6">
                                <input
                                    name="txtuserName"
                                    type="text"
                                    id="txtuserName"
                                    tabIndex="1"
                                    className="form-control input-md"
                                    placeholder="User Name"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <label htmlFor="txtuserName" style={{ height: 0, overflow: 'hidden', display: 'block', margin: 0 }}>User Name</label>
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="password"
                                    name="txtpassword"
                                    tabIndex="2"
                                    id="txtpassword"
                                    className="form-control input-md"
                                    autoComplete="off"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="txtpassword" style={{ height: 0, overflow: 'hidden', display: 'block', margin: 0 }}>Password</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6">
                            <br />
                                <div style={{ marginBottom: '10px' }}>
                                    <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{captchaCode}</span> {/* Display captcha */}
                                    <a
                                        id="refreshCaptcha"
                                        href="javascript:void(0)"
                                        onClick={generateCaptcha}
                                    >
                                        <i className="fa fa-refresh text-green fa-2x pull-right padding-10px"></i>
                                    </a>
                                </div>
                                
                            </div>
                            <br />
                            <div className="col-md-6">
                                <input
                                    name="txtCaptcha"
                                    type="text"
                                    id="txtCaptcha"
                                    tabIndex="3"
                                    className="form-control input-md"
                                    placeholder="Enter Captcha Code"
                                    value={captchaInput}
                                    onChange={(e) => setCaptchaInput(e.target.value)}
                                />
                                <label htmlFor="txtCaptcha" style={{ height: 0, overflow: 'hidden', display: 'block', margin: 0 }}>Captcha Code</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6" style={{ display: 'none' }}>
                                <select name="ddloperator" id="ddloperator" className="form-control input-md">
                                    <option value="OM">Operator</option>
                                    <option value="OU">Admin</option>
                                    <option value="EM">Edistrict Manager</option>
                                    <option value="RU">Other User</option>
                                </select>
                            </div>
                            <br />
                            <div className="col-md-6">
                                <button type="button" id="btnLogin" className="btn btn-success" onClick={handleLogin}>Login</button>
                                &nbsp;
                                <button type="button" id="btnReset" className="btn btn-success" onClick={handleReset}>Reset</button>
                                <br />
                                <a href="ForgotPassword.aspx">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    </>
    );
};

export default SignIn;
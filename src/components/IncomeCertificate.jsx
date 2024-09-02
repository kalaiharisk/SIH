import React from 'react';
import './IncomeCertificate.css';
import { useNavigate } from 'react-router-dom';

const IncomeCertificate = () => {
    const nav = useNavigate();
    return (
        <div className="income-cert-container">
            <div className="income-cert-sidebar">
                <div className="income-cert-sidebar-title">Revenue Department</div>
                <div className="income-cert-sidebar-item">REV-103 Income Certificate</div>
            </div>
            <div className="income-cert-content">
                <h1 className="income-cert-title" style={{color:'white'}}>REV-103 Income Certificate</h1>
                <div className="income-cert-instructions">
                    <p>Note: Apply for the service as per the given instructions :-</p>
                    <ul>
                        <li>If Applicant has CAN Number: Please enter CAN Number or any of the fields below then click on Search Button to proceed.</li>
                        <li>If Applicant doesn't have CAN Number: Click on Register button.</li>
                        <li>Apply for CAN registration:</li>
                    </ul>
                    <button className="income-cert-register-btn">Register CAN</button>
                </div>
                <form className="income-cert-form">
                    <div className="income-cert-form-row">
                        <label htmlFor="income-cert-can-number">Applicant CAN Number</label>
                        <input type="text" id="income-cert-can-number" name="can-number" />
                    </div>
                    <div className="income-cert-form-row">
                        <label htmlFor="income-cert-name">Applicant Name </label>
                        <input type="text" id="income-cert-name" name="name" />
                    </div>
                    <div className="income-cert-form-row">
                        <label htmlFor="income-cert-father-name">Applicant Father Name </label>
                        <input type="text" id="income-cert-father-name" name="father-name" />
                    </div>
                    <div className="income-cert-form-row">
                        <label htmlFor="income-cert-mobile-number">Applicant Mobile Number </label>
                        <input type="text" id="income-cert-mobile-number" name="mobile-number" />
                    </div>
                    <div className="income-cert-form-row">
                        <label htmlFor="income-cert-email">Applicant Email Id </label>
                        <input type="email" id="income-cert-email" name="email" />
                    </div>
                    <div className="income-cert-form-row">
                        <label htmlFor="income-cert-aadhaar">Aadhaar Number *</label>
                        <input type="text" id="income-cert-aadhaar" name="aadhaar" />
                    </div>
                    <button type="submit" onClick={()=>nav('/certificate')} style={{cursor:'pointer'}} className="income-cert-search-btn">Search</button>
                </form>
            </div>
            <footer className="income-cert-footer">
                <p>© 2015. Government of Tamil Nadu. All rights reserved</p>
                <p>This Page is best viewed with Mozilla Firefox version 40 and above.</p>
                <p>Version 1.4.0.0</p>
            </footer>
        </div>
    );
};

export default IncomeCertificate;

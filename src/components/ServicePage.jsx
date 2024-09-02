import React from 'react';
import './ServicesPage.css';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
    const nav = useNavigate();

    return (
        <div className="srv-services-page">
            <div className="srv-sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Wallet Recharge</li>
                    <li>Services</li>
                    <li>Wallet Recharge Reprint</li>
                    <li>Receipt</li>
                    <li>Bank Details</li>
                    <li>Pending Transactions</li>
                    <li>Application Check Status</li>
                </ul>
            </div>
            <div className="srv-main-content">
                <div className="srv-header">
                    <div className="srv-service-title">Services</div>
                    <div className="srv-user-info">
                        <span>ADMIN NAME</span><br />
                        <span>WORKPLACE</span> &nbsp;&nbsp;
                        <span>ADMIN ID</span> &nbsp;
                    </div>
                </div>
                <div className="srv-services-section">
                    <div className="srv-filter-section">
                        <div className="srv-filter">
                            <label>DEPARTMENT WISE</label>
                            <select>
                                <option>Revenue Department</option>
                            </select>
                        </div>
                        <div className="srv-filter">
                            <label>SERVICE WISE</label>
                            <select>
                                <option>10 records per page</option>
                            </select>
                        </div>
                        <div className="srv-search">
                            <label>SEARCH</label>
                            <input type="text" placeholder="Search..." />
                            <button>Back</button>
                        </div>
                    </div>
                    <div className="srv-service-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example Service Rows */}
                                <tr><td>Extract Download</td></tr>
                                <tr><td>Community Certificate</td></tr>
                                <tr><td>Nativity Certificate</td></tr>
                                <tr><td onClick={() => nav('/income')} style={{ cursor: 'pointer' }}>Income Certificate</td></tr>
                                <tr><td>First Graduate Certificate</td></tr>
                                <tr><td>Deserted Woman Certificate</td></tr>
                                <tr><td>Agricultural Income Certificate</td></tr>
                                <tr><td>Family Migration Certificate</td></tr>
                                <tr><td>Unemployment Certificate</td></tr>
                                <tr><td>Widow Certificate</td></tr>
                            </tbody>
                        </table>
                        <div className="srv-pagination">
                            <button>Previous</button>
                            <button className="srv-active">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;

import React from 'react';
import '../assets/VService.css';
import { useNavigate, Link } from 'react-router-dom';

const VServicePage = () => {
    const nav = useNavigate();

    const handleApprove = (applicationId) => {
        console.log(`Application ${applicationId} approved.`);
        // Optionally redirect after approval
        nav(`/application/${applicationId}`);
    };

    return (
        <div className="vsp-services-page">
            <div className="vsp-sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Application Check Status</li>
                </ul>
            </div>
            <div className="vsp-main-content">
                <div className="vsp-header">
                    <div className="vsp-service-title">Application Approvals</div>
                    <div className="vsp-user-info">
                        <span>ADMIN NAME</span><br />
                        <span>WORKPLACE</span> &nbsp;&nbsp;
                        <span>ADMIN ID</span> &nbsp;
                    </div>
                </div>
                <div className="vsp-services-section">
                    <div className="vsp-filter-section">
                        <div className="vsp-filter">
                            <label>DEPARTMENT WISE</label>
                            <select>
                                <option>Revenue Department</option>
                            </select>
                        </div>
                        <div className="vsp-filter">
                            <label>SERVICE WISE</label>
                            <select>
                                <option>10 records per page</option>
                            </select>
                        </div>
                        <div className="vsp-search">
                            <label>SEARCH</label>
                            <input type="text" placeholder="Search..." />
                            <button>Back</button>
                        </div>
                    </div>
                    <div className="vsp-service-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Application Number</th>
                                    <th>Application Name</th>
                                    <th>Applicant</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="/application/1">001</Link></td>
                                    <td>Income Certificate</td>
                                    <td>John Doe</td>
                                    <td>Pending</td>
                                    <td>
                                        <Link to={`/application/1`}>
                                            <button>Approve</button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Link to="/application/2">002</Link></td>
                                    <td>Nativity Certificate</td>
                                    <td>Jane Smith</td>
                                    <td>Pending</td>
                                    <td>
                                        <Link to={`/application/2`}>
                                            <button>Approve</button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td><Link to="/application/3">003</Link></td>
                                    <td>Community Certificate</td>
                                    <td>Michael Johnson</td>
                                    <td>Pending</td>
                                    <td>
                                        <Link to={`/application/3`}>
                                            <button>Approve</button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="vsp-pagination">
                            <button>Previous</button>
                            <button className="vsp-active">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VServicePage;

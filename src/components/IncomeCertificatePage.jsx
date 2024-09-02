import React from "react";
import '../components/IncomeCertificatePage.css'
import { useNavigate } from "react-router-dom";

const IncomeCertificatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Submit the form data to the backend here
    // After successful submission, redirect to DocumentUploadPage
    navigate("/document");
  };

  return (
    <div className="income1-container">
      {/* Sidebar Section */}
      <div className="income1-sidebar">
        <h3>Revenue Department</h3>
        <ul>
          <li>REV-103 Income Certificate</li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="income1-main-content">
        {/* Navbar Section */}
        <div className="income1-navbar">
          <button>Saved Application</button>
          <button>Submitted Application</button>
          <button>Returned Application</button>
          <button>Check Status</button>
          <button>Reprint Receipt</button>
        </div>

        {/* Form Section */}
        <div className="income1-form-section">
          <h2>Income Certificate</h2>

          {/* Applicant Detail Section */}
          <div className="income1-applicant-details">
            <h3>Applicant Detail</h3>
            <div className="income1-form-row">
              <label>Appellation *</label>
              <input type="text" />
              <label>Aadhaar No. *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Applicant Name *</label>
              <input type="text" />
              <label>Father/Husband/Guardian Name *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Date of Birth *</label>
              <input type="date" />
              <label>Gender *</label>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="income1-form-row">
              <label>Marital Status *</label>
              <select>
                <option value="unmarried">Unmarried</option>
                <option value="married">Married</option>
              </select>
              <label>Religion *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Community *</label>
              <input type="text" />
              <label>Occupation *</label>
              <input type="text" />
            </div>
          </div>

          {/* Current Address Section */}
          <div className="income1-address-details">
            <h3>Current Address</h3>
            <div className="income1-form-row">
              <label>State *</label>
              <input type="text" />
              <label>District *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Taluk *</label>
              <input type="text" />
              <label>Revenue Village *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Street Name/No./Hamlet *</label>
              <input type="text" />
              <label>Building/Door/Flat No.</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Pin Code *</label>
              <input type="text" />
            </div>
          </div>

          {/* Permanent Address Section */}
          <div className="income1-address-details">
            <h3>Permanent Address</h3>
            <div className="income1-form-row">
              <input type="checkbox" />
              <label>Same as current address</label>
            </div>
            <div className="income1-form-row">
              <label>State *</label>
              <input type="text" />
              <label>District *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Taluk *</label>
              <input type="text" />
              <label>Revenue Village *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Street Name/No./Hamlet *</label>
              <input type="text" />
              <label>Building/Door/Flat No.</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Pin Code *</label>
              <input type="text" />
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="income1-additional-details">
            <h3>Applicant Detail</h3>
            <div className="income1-form-row">
              <label>Phone/Landline No. with STD Code</label>
              <input type="text" />
              <label>Mobile Number *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Email Id *</label>
              <input type="email" />
            </div>
          </div>
          {/* Family Members Section */}
          <div className="income1-family-members">
            <h3>Details of Family Members</h3>
            <div className="income1-form-row">
              <label>Total number of family members *</label>
              <input type="number" />
            </div>
            <div className="income1-family-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Relation</th>
                    <th>Profession</th>
                    <th>Monthly Income</th>
                    <th>Annual Income</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" /></td>
                    <td><input type="number" /></td>
                    <td>
                      <select>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="number" /></td>
                    <td><input type="number" /></td>
                    <td><button>Delete</button></td>
                  </tr>
                </tbody>
              </table>
              <button className="income1-add-member">Add</button>
            </div>
          </div>

          {/* Income Details Section */}
          <div className="income1-income-details">
            <h3>Source of Income</h3>
            <div className="income1-income-checkboxes">
              <label><input type="checkbox" /> Agriculture and Allied</label>
              <label><input type="checkbox" /> Salary</label>
              <label><input type="checkbox" /> Business</label>
              <label><input type="checkbox" /> Rent</label>
              <label><input type="checkbox" /> Others</label>
            </div>
            <div className="income1-form-row">
              <label>PAN Number *</label>
              <input type="number" />
              <span className="span1div"></span>
              <label>Monthly Income (In Rs.)</label>
              <input type="number" />
              <span className="span1div"></span>
              <label>Annual Income (In Rs.)</label>
              <input type="number" />
            </div>
            <div className="income1-form-row">
              <label>Grand Total (In Rs.)</label>
              <input type="number" />
            </div>
          </div>

          {/* Submit Section */}
          <div className="income1-submit-section">
            <button className="income1-submit" onClick={handleSubmit}>Submit</button>
            <button className="income1-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeCertificatePage;

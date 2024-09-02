import React, { useState } from "react";
import '../components/IncomeCertificatePage.css'
import { useNavigate } from "react-router-dom";

const IncomeCertificatePage = () => {

  const [familyMembers, setFamilyMembers] = useState([]);
  const [currentMember, setCurrentMember] = useState({
    name: "",
    age: "",
    sex: "",
    relation: "",
    profession: "",
    annualIncome: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change for adding/editing family member
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  // Add or update family member details
  const handleAddOrUpdate = () => {
    if (isEditing) {
      const updatedMembers = familyMembers.map((member, index) =>
        index === editIndex ? currentMember : member
      );
      setFamilyMembers(updatedMembers);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setFamilyMembers([...familyMembers, currentMember]);
    }
    setCurrentMember({
      name: "",
      age: "",
      sex: "",
      relation: "",
      profession: "",
      annualIncome: "",
    });
  };

  // Handle edit action
  const handleEdit = (index) => {
    setCurrentMember(familyMembers[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle delete action
  const handleDelete = (index) => {
    const updatedMembers = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updatedMembers);
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Aadhaar No. *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Applicant Name *</label>
              <input type="text" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Father/Husband/Guardian Name *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Date of Birth *</label>
              <input type="date" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
              </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Religion *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Community *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Occupation *</label>
              <input type="text" />
            </div>
          </div>

          {/* Current Address Section */}
          <div className="income1-address-details">
            <h3>Current Address</h3>
            <div className="income1-form-row">
              <label>State *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>District *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Taluk *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Revenue Village *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Street Name/No./Hamlet *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Building/Door/Flat No.</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Pin Code *</label>
              <input type="text" style={{ marginRight: "51%" }} />
            </div>
          </div>

          {/* Permanent Address Section */}
          <div className="income1-address-details">
            <h3>Permanent Address</h3>
            <div className="income1-form-row">
              <label>Same as current address</label>
              <input type="checkbox" />
            </div>
            <div className="income1-form-row">
              <label>State *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>District *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Taluk *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Revenue Village *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Street Name/No./Hamlet *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Building/Door/Flat No.</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Pin Code *</label>
              <input type="text" style={{ marginRight: "51%" }} />
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="income1-additional-details">
            <h3>Applicant Detail</h3>
            <br />
            <div className="income1-form-row">
              <label>Phone/Landline No. with STD Code</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Mobile Number *</label>
              <input type="text" />
            </div>
            <div className="income1-form-row">
              <label>Email Id *</label>
              <input type="email" style={{ marginRight: "51%" }} />
            </div>
          </div>

          {/* Family Members Section */}
          <div className="income1-family-members">
            <h3>Details of Family Members</h3>
            <div className="income1-form-row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={currentMember.name}
                onChange={handleInputChange}
              />&nbsp;&nbsp;&nbsp;
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={currentMember.age}
                onChange={handleInputChange}
              />&nbsp;&nbsp;&nbsp;
              <label>Sex</label>
              <select
                name="sex"
                value={currentMember.sex}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>&nbsp;&nbsp;&nbsp;
              <label>Relation</label>
              <input
                type="text"
                name="relation"
                value={currentMember.relation}
                onChange={handleInputChange}
              />&nbsp;&nbsp;&nbsp;
              <label>Profession</label>
              <input
                type="text"
                name="profession"
                value={currentMember.profession}
                onChange={handleInputChange}
              />&nbsp;&nbsp;&nbsp;
              <label>Annual Income</label>
              <input
                type="number"
                name="annualIncome"
                value={currentMember.annualIncome}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleAddOrUpdate} className="income1-add-member">
              {isEditing ? "Update Member" : "Add Member"}
            </button>


          </div>
          {/* Family Members Table */}
          <div className="income1-family-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Relation</th>
                  <th>Profession</th>
                  <th>Annual Income</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {familyMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.age}</td>
                    <td>{member.sex}</td>
                    <td>{member.relation}</td>
                    <td>{member.profession}</td>
                    <td>{member.annualIncome}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button> &nbsp;&nbsp;
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              <input type="number" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="span1div"></span>
              <label>Monthly Income (In Rs.)</label>
              <input type="number" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="span1div"></span>
              <label>Annual Income (In Rs.)</label>
              <input type="number" />
            </div>
            <div className="income1-form-row">
              <label>Grand Total (In Rs.)</label>
              <input type="number" style={{ marginRight: "65%" }} />
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

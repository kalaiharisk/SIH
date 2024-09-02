import React, { useState } from "react";
import '../components/IncomeCertificatePage.css'
import { useNavigate } from "react-router-dom";
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';


const IncomeCertificatePage = () => {

  const nav = useNavigate();
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
  const [selectedIncomeSource, setSelectedIncomeSource] = useState("");
  const [file, setFile] = useState(null);
  const [canNumber, setCanNumber] = useState("");
  const [applicantDetails, setApplicantDetails] = useState({
    name: "",
    fatherName: "",
    age: "",
    address: "",
    pinCode: "",
  });

  // Handle input change for adding/editing family member
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  // Handle input change for applicant details
  const handleApplicantChange = (e) => {
    const { name, value } = e.target;
    setApplicantDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
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

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle CAN number change
  const handleCanNumberChange = (e) => {
    setCanNumber(e.target.value);
  };

  // Function to generate and download the self-declaration PDF
  const generateSelfDeclarationPDF = () => {
    // Create a new jsPDF instance with letter size (8.5 x 11 inches)
    const doc = new jsPDF({
      unit: 'in',
      format: 'letter'
    });
  
    // Define margins (in inches)
    const margin = 1; // 1 inch margin
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
  
    // Add title
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('SELF DECLARATION FORM', margin, margin + 0.5); // 0.5 inch below the top margin
  
    // Add body text
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(
      `I ${applicantDetails.name}, son/daughter of ${applicantDetails.fatherName} born on ${applicantDetails.age},
      residing at ${applicantDetails.address} hereby declare that the building plan approval submitted is true and
      correct to the best of my knowledge and belief. I fully understand the consequences of giving false information.
      If the information is found to be false, I shall be liable for penalty/punishment or legal action.
  
      I accept that, I have read and agree to the above conditions.`,
      margin,
      margin + 1, // 1 inch below the title
      { maxWidth: pageWidth - 2 * margin } // Wrap text within margins
    );
  
    // Add footer
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'italic');
    doc.text('This is a system-generated document. No signature is required.', margin, pageHeight - margin - 0.5); // 0.5 inch from the bottom margin
  
    // Save the PDF
    doc.save('SelfDeclaration.pdf');
  };

  // Handle selection of income source
  const handleIncomeSourceChange = (e) => {
    setSelectedIncomeSource(e.target.value);
  };

  // Handle file input change
  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // // Handle CAN number change
  // const handleCanNumberChange = (e) => {
  //   setCanNumber(e.target.value);
  // };

  const handleSubmit=(e)=>{
    nav('/document');
  }

  // Components to display based on selected income source
  const renderIncomeDetails = () => {
    return (
      <div className="income1-income-details-container">
        {selectedIncomeSource === "agriculture" && (
          <div className="income1-income-details-section">
            <p className="income1-income-details-header">Agriculture Income</p>
            <p className="income1-income-details-description">
              For the Agriculture sector, please provide comprehensive documentation of your agricultural income. This should include details on income derived from farming, crop production, or any other agricultural activities. Ensure that the documents you upload substantiate your agricultural income accurately.
            </p>
            <input
              type="file"
              className="income1-income-details-file-input"
              onChange={handleFileChange}
            />
          </div>
        )}
  
        {selectedIncomeSource === "salary" && (
          <div className="income1-income-details-section">
            <p className="income1-income-details-header">Salary Income</p>
            <p className="income1-income-details-description">
              For the Salary income source, you are required to upload your monthly payslips from the past six months. These payslips should reflect your monthly earnings and any relevant salary information. Please ensure that the payslips are clear and legible to facilitate accurate verification.
            </p>
            <input
              type="file"
              className="income1-income-details-file-input"
              onChange={handleFileChange}
            />
          </div>
        )}
  
        {selectedIncomeSource === "business" && (
          <div className="income1-income-details-section">
            <p className="income1-income-details-header">Business Income</p>
            <p className="income1-income-details-description">
              For Business income, you must upload a copy of your CAN (Customer Account Number) card to verify your business income. Additionally, please provide your CAN number in the field provided below to assist with the verification process.
            </p>
            <div className="income1-income-details-can-number">
              <input
                type="text"
                value={canNumber}
                onChange={handleCanNumberChange}
                placeholder="Enter CAN Number"
              />
            </div>
            <input
              type="file"
              className="income1-income-details-file-input"
              onChange={handleFileChange}
            />
          </div>
        )}
  
        {selectedIncomeSource === "rent" && (
          <div className="income1-income-details-section">
            <p className="income1-income-details-header">Rent Income</p>
            <p className="income1-income-details-description">
              For the Rent income source, please upload a copy of the rental agreement. This agreement should include detailed information regarding the rental terms, the landlord's contact information, and the landlord's signature. This documentation is necessary to verify your rental income claims.
            </p>
            <input
              type="file"
              className="income1-income-details-file-input"
              onChange={handleFileChange}
            />
          </div>
        )}
  
        {selectedIncomeSource === "others" && (
          <div className="income1-income-details-section">
            <p className="income1-income-details-header">Other Income</p>
            <p className="income1-income-details-description">
              For other sources of income, please submit a verified approval document from the Assistant Revenue Officer. This document should authenticate and confirm the income source you are claiming. Ensure the document is properly verified and signed for accurate processing.
            </p>
            <input
              type="file"
              className="income1-income-details-file-input"
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>
    );
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
              <input type="text" name="name"
                value={applicantDetails.name}
                onChange={handleApplicantChange}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Father/Husband/Guardian Name *</label>
              <input type="text" name="fatherName"
                value={applicantDetails.fatherName}
                onChange={handleApplicantChange}/>
            </div>
            <div className="income1-form-row">
              <label>Date of Birth *</label>
              <input type="date" name="age"
                value={applicantDetails.age}
                onChange={handleApplicantChange}/>
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
          {/* <div className="income1-applicant-details">
            <h3>Applicant Detail</h3>
            <div className="income1-form-row">
              <label>Applicant Name *</label>
              <input
                type="text"
                name="name"
                value={applicantDetails.name}
                onChange={handleApplicantChange}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Father/Husband/Guardian Name *</label>
              <input
                type="text"
                name="fatherName"
                value={applicantDetails.fatherName}
                onChange={handleApplicantChange}
              />
            </div>
            <div className="income1-form-row">
              <label>Age *</label>
              <input
                type="number"
                name="age"
                value={applicantDetails.age}
                onChange={handleApplicantChange}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={applicantDetails.address}
                onChange={handleApplicantChange}
              />
            </div>
            <div className="income1-form-row">
              <label>Pin Code *</label>
              <input
                type="text"
                name="pinCode"
                value={applicantDetails.pinCode}
                onChange={handleApplicantChange}
              />
            </div>
          </div> */}

          {/* Current Address Section */}
          <div className="income1-address-details">
            <h3>Current Address</h3>
            <div className="income1-form-row">
              <label>State *</label>
              <input type="text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>District *</label>
              <input type="text" name="address"
                value={applicantDetails.address}
                onChange={handleApplicantChange}/>
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
              <input type="text" style={{ marginRight: "51%" }} name="pinCode"
                value={applicantDetails.pinCode}
                onChange={handleApplicantChange}/>
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
            <div className="income1-income-radio-buttons">
              <label>
                <input
                  type="radio"
                  name="incomeSource"
                  value="agriculture"
                  checked={selectedIncomeSource === "agriculture"}
                  onChange={handleIncomeSourceChange}
                />{" "}
                Agriculture and Allied
              </label>&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="incomeSource"
                  value="salary"
                  checked={selectedIncomeSource === "salary"}
                  onChange={handleIncomeSourceChange}
                />{" "}
                Salary
              </label>&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="incomeSource"
                  value="business"
                  checked={selectedIncomeSource === "business"}
                  onChange={handleIncomeSourceChange}
                />{" "}
                Business
              </label>&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="incomeSource"
                  value="rent"
                  checked={selectedIncomeSource === "rent"}
                  onChange={handleIncomeSourceChange}
                />{" "}
                Rent
              </label>&nbsp;&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="incomeSource"
                  value="others"
                  checked={selectedIncomeSource === "others"}
                  onChange={handleIncomeSourceChange}
                />{" "}
                Others
              </label>
            </div>

            {/* Display specific component based on the selected income source */}
            {renderIncomeDetails()}
            <br /><br />
            {/* Other income details inputs */}
            <div className="income1-form-row">
              <label>PAN Number *</label>
              <input type="number" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="span1div"></span>
              <label>Monthly Income (In Rs.)</label>
              <input type="number" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="span1div"></span>
              <label>Annual Income (In Rs.)</label>
              <input type="number" />
            </div>
            <div className="income1-form-row">
              <label>Grand Total (In Rs.)</label>
              <input type="number" style={{ marginRight: "65%" }} />
            </div>
          </div>
          <div className="income1-self-declaration">
          <button onClick={generateSelfDeclarationPDF}>Generate Self Declaration PDF</button>
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

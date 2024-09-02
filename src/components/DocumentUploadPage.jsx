import React, { useState } from "react";
import '../assets/DocumentUploadPage.css'

const DocumentUploadPage = () => {
  const [fileErrors, setFileErrors] = useState({});

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    const maxSize = 150 * 1024; // 150 KB
    const minSize = 50 * 1024;  // 50 KB

    if (file) {
      if (file.size > maxSize) {
        setFileErrors(prevErrors => ({
          ...prevErrors,
          [fileType]: `File size should be less than 150KB. Selected file size is ${(file.size / 1024).toFixed(2)}KB.`,
        }));
      } else if (file.size < minSize) {
        setFileErrors(prevErrors => ({
          ...prevErrors,
          [fileType]: `File size should be more than 50KB. Selected file size is ${(file.size / 1024).toFixed(2)}KB.`,
        }));
      } else {
        setFileErrors(prevErrors => ({
          ...prevErrors,
          [fileType]: null,
        }));
      }
    }
  };

  return (
    <div className="document-upload-container">
      {/* Sidebar Section */}
      <div className="document-upload-sidebar">
        <h3>Revenue Department</h3>
        <ul>
          <li>Document Upload</li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="document-upload-main-content">
        <h2>Document Upload</h2>
        <p>Please upload the following scanned documents (each file should be between 50KB and 150KB):</p>
        <ul>
          <li>Aadhaar Card</li>
          <li>Ration Card or Smart Card</li>
          <li>Photograph of the Applicant</li>
          <li>Self Declaration Form</li>
        </ul>

        {/* Instructions Section */}
        <div className="document-upload-instructions">
          <h3>Instructions:</h3>
          <p>Please ensure that all documents are clear and legible. Documents should be scanned in color at a resolution of 300 DPI to ensure clarity.</p>
          <p>Only the following file formats are accepted: PDF, JPG, JPEG, and PNG. Please check the file size before uploading.</p>
        </div>

        {/* Document Upload Form */}
        <div className="document-upload-form">
          <div className="document-upload-row">
            <label>Aadhaar Card *</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, 'aadhaar')}
            />
            {fileErrors.aadhaar && <p className="error-message">{fileErrors.aadhaar}</p>}
            <p>Accepted formats: PDF, JPG, JPEG, PNG. Max file size: 150KB.</p>
          </div>
          <div className="document-upload-row">
            <label>Ration Card or Smart Card *</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, 'ration')}
            />
            {fileErrors.ration && <p className="error-message">{fileErrors.ration}</p>}
            <p>Accepted formats: PDF, JPG, JPEG, PNG. Max file size: 150KB.</p>
          </div>
          <div className="document-upload-row">
            <label>Photograph of the Applicant *</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, 'photo')}
            />
            {fileErrors.photo && <p className="error-message">{fileErrors.photo}</p>}
            <p>Accepted formats: JPG, JPEG, PNG. Max file size: 150KB.</p>
          </div>
          <div className="document-upload-row">
            <label>Self Declaration Form *</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, 'selfDeclaration')}
            />
            {fileErrors.selfDeclaration && <p className="error-message">{fileErrors.selfDeclaration}</p>}
            <p>Accepted format: PDF. Max file size: 150KB.</p>
          </div>
        </div>

        {/* Submit Section */}
        <div className="document-upload-submit-section">
          <button className="document-upload-submit" disabled={Object.values(fileErrors).some(error => error !== null)}>Submit</button>
          <button className="document-upload-cancel">Cancel</button>
        </div>

        {/* Tips Section */}
        <div className="document-upload-tips">
          <h4>Tips for Uploading Documents:</h4>
          <ul>
            <li>Ensure that the document is well-lit and free from shadows.</li>
            <li>Avoid uploading images that are too dark or too light.</li>
            <li>Use a scanner or a good quality camera to capture the document.</li>
            <li>If using a smartphone, place the document on a flat surface and ensure the camera is steady.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadPage;

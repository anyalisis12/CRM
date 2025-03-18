import React, { useState } from "react";
import "./complaint.css"; // Custom styling

const Complaint = () => {
  const [formData, setFormData] = useState({
    
    name: "",
    description: "",
    category: "Data",
    date: "",
    status: "Active",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      
      name: "",
      description: "",
      category: "Data",
      date: "",
      status: "Active",
      remarks: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="complaint-container ">
      <h2 className="form-title">Complaint Form</h2>
      <form onSubmit={handleSubmit}>
      <form class="row g-2">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter..." />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter..." />
        </div>

        

        <div className="form-group col-md-6">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="form-group col-md-6">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option>Active</option>
            <option>Resolved</option>
            <option>Pending</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option>Data</option>
            <option>Service</option>
            <option>Technical</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label>Remarks</label>
          <input type="text" name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Enter..." />
        </div>

        <div className="button-group">
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      </form>
    </div>
  );
};

export default Complaint;

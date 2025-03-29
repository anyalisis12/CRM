import React from 'react'
import './updatestatus.css'
const UpdateStatus = () => {
  return (
    <div class="container_1 mt-4 ">
      
    <div class="card p-4 shadow">
      <h3>Update Status</h3>
      <div class="search-container">
    <input class="form-control-1 mb-3" type="search" placeholder=" Search" aria-label="Search"/>
    <button class="btn btn-outline-success" type="submit">Search</button>
</div>
        <label class="fw-bold text-secondary">Name</label>
        <input type="text" class="form-control mb-3"/>
        <select class="form-select mb-3">
            <option selected>Select an option</option>
            <option>Enquiry done (1st call)</option>
            <option>Design Submitted</option>
            <option>Quotation Submitted</option>
            <option>Online Appln Done</option>
            <option>Presanction Received</option>
            <option>Installation Done</option>
            <option>Geotagging Done</option>
            <option>Bill Uploaded</option>
            <option>Order from Dealer/Converted to Sales</option>
            <option>Order Postponed</option>
            <option>Order Cancelled</option>
            <option>Lost to Other Co.</option>
        </select>
        <label class="fw-bold text-secondary">Comment</label>
        <input type="text" class="form-control mb-3"/>
        <div class="row mb-3">
            <div class="col-6">
                <label class="fw-bold text-dark">Next Follow-up Date</label>
                <input type="date" class="form-control"/>
            </div>
            <div class="col-6">
                <label class="fw-bold text-dark">Photo Upload</label>
                <input type="file" class="form-control"/>
            </div>
        </div>
        <button class="btn btn-success w-100">SAVE</button>
    </div>
</div>
  )
}
export default UpdateStatus

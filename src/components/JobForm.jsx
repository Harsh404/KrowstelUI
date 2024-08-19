import React from 'react';
import '../components/styles/JobForm.css';

export default function JobForm() {
  return (
    <div className="job-form-container">
      <div className="heading">
        <h1 className="job-form-heading">Post a Job</h1>
      </div>
      <button id='autofill-btn'>
        Autofill
      </button>
      <div className="job-form">
        <div className="job-form-row">
          <div className="job-form-column">
            <label className="job-form-label">Job Title</label>
            <input type="text" placeholder='Type here....' className="job-form-input" />
          </div>
          <div className="job-form-column">
            <label className="job-form-label">Department</label>
            <input type="text" placeholder='Type here....' className="job-form-input" />
          </div>
        </div>
        <div className="job-form-row">
          <div className="job-form-column">
            <label className="job-form-label">Industry</label>
            <input type="text" placeholder='Type here....' className="job-form-input" />
          </div>
          <div className="job-form-column">
            <label className="job-form-label">Location</label>
            <input type="text" placeholder='Type here....' className="job-form-input" />
          </div>
        </div>
        <div className="job-form-row">
          <div className="job-form-column">
            <label className="job-form-label">Relevant Experience Required</label>
            <div className="job-form-select-wrapper">
              <select className="job-form-select">
                <option>Min</option>
                <option value="0 Or Fresher">0 Or Fresher</option>
              </select>
              <select className="job-form-select">
                <option>Max</option>
                <option value="0 to 1 Years">0 to 1 Years</option>
                <option value="1 to 5 Years">1 to 5 Years</option>
                <option value="5 or more">5 or more</option>
              </select>
            </div>
          </div>
          <div className="job-form-column">
            <label className="job-form-label">Salary Range</label>
            <div className="job-form-salary-wrapper">
              <div className='job-form-salary-wrapper-cont-1'>
                <div className="salary-input-cont1">
                  <div className="salary-input">
                    <input type="number" id='quantity' name='quantity' className="job-form-salary-input" placeholder="Min" />
                  </div>
                </div>
                {/* <div className="salary-input-cont2">
                  <div className="salary-input">
                    <input type="number" id='quantity' name='quantity' className="job-form-salary-input" placeholder="Min" />
                  </div> */}
                <div className="salary-input-lpa1">
                  LPA
                </div>   
              </div>
              <div className="job-form-salary-wrapper-cont-2">
                <div className="salary-input-cont2">
                  <input type="number" id='quantity' name='quantity' className="job-form-salary-input" placeholder="Min" />
                </div>
                <div className="salary-input-lpa">
                  LPA
                </div>
              </div>  
            </div>
          </div>
        </div>
        <div className="job-form-description">
          <label className="job-form-label">Description</label>
          <textarea className="job-form-textarea" placeholder='Type here....'/>
        </div>
        <div className="job-form-button-group">
          <button className="job-form-cancel-button">Cancel</button>
          <button className="job-form-cancel-button">Draft</button>
          <button className="job-form-preview-button" type='submit'>Job Preview</button>
        </div>
      </div>
    </div>
  )
}

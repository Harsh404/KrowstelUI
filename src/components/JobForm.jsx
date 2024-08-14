import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/styles/JobForm.css';


export default function JobForm() {

  const [title, setTtile] = useState("");
  const [department, setDepartment] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setErrror] = useState("");

  //  Patterns

  const titlePattern = /^[a-zA-Z]+$/;
  const departmentPattern = /^[a-zA-Z]+$/;
  const industryPattern = /^[a-zA-Z]+$/;
  const locationPattern = /^[ A-Za-z0-9_@./#&+-]*$/;
  const descriptionPattern = /^[a-zA-Z]+$/;


  function handleOnChangeTitle(e) {
    setTtile(e.target.value)
  }

  function handleOnChangeDepartment(e) {
    setDepartment(e.target.value);
  }

  function handleOnChangeIndustry(e) {
    setIndustry(e.target.value);
  }

  function handleOnChangeLocation(e) {
    setLocation(e.target.value);
  }

  function handleOnChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(title==="" || !titlePattern.test(title)){
      toast.error('Check your Title section !');
      // console.log("Check your title again")
    }
    if(department==="" || !departmentPattern.test(department)){
      toast.error('Check your Department section !')
    }
    if(industry==="" || !industryPattern.test(industry)){
      toast.error('Check your Industry section !');
    }
    if(location==="" || !locationPattern.test(location)){
      toast.error('Check your Location section !');
    }
    if(description==="" || !descriptionPattern.test(description)){
      toast.error('Check your Description section !');
    }
  }


  return (
    <div className="job-form-container">
      <h1 className="job-form-heading">Post a Job</h1>
      <div className='jobform--auto-btn'>
        <button id='autofill-btn'>
          Autofill
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="job-form">
          <div className="job-form-row">
            <div className="job-form-column">
              <label className="job-form-label">Job Title</label>
              <input type="text" onChange={handleOnChangeTitle} name='title' placeholder='Type here...' className="job-form-input" />
            </div>
            <div className="job-form-column">
              <label className="job-form-label">Department</label>
              <input type="text" onChange={handleOnChangeDepartment} name='department' placeholder='Type here....' className="job-form-input" />
            </div>
          </div>
          <div className="job-form-row">
            <div className="job-form-column">
              <label className="job-form-label">Industry</label>
              <input type="text" onChange={handleOnChangeIndustry} name='industry' placeholder='Type here....' className="job-form-input" />
            </div>
            <div className="job-form-column">
              <label className="job-form-label">Location</label>
              <input type="text" onChange={handleOnChangeLocation} name='location' placeholder='Type here....' className="job-form-input" />
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
                <input type="number" id='quantity' name='quantity' className="job-form-salary-input" placeholder="Min" />
                <span className="job-form-salary-label">LPA</span>
                <input type="text" className="job-form-salary-input" placeholder="Max" />
                <span className="job-form-salary-label">LPA</span>
              </div>
            </div>
          </div>
          <div className="job-form-column">
            <label className="job-form-label">Description</label>
            <textarea className="job-form-textarea" onChange={handleOnChangeDescription} name='' placeholder='Type here....' />
          </div>
          <div className="job-form-button-group">
            <button className="job-form-cancel-button">Cancel</button>
            <button className="job-form-preview-button" type='submit'>Job Preview</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

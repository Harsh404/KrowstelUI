import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/styles/JobForm.css';


export default function JobForm() {

  function colGenrator(e1){
    return(
      <div className='job-form-column'>
        <label className='job-form-label'>{e1.label}</label>
        <input type="text" onChange={handleOnChange} name={e1.name} placeholder='Type here...' className="job-form-input" />
      </div>
    )
  }
  function rowGenrator(r1,r2){
    return(<div className='job-form-row'>
      {colGenrator(r1)}
      {colGenrator(r2)}
      </div>)   
  }

  // function formFields(field1, field2){
  //   return(<div className='job-form-row'>
  //     {/* <div className='job-form-column'>
  //       <label className="job-form-label">{field1.label}</label>
  //       <input type="text" onChange={handleOnChange} name={field1.name} placeholder='Type here...' className="job-form-input" />
  //     </div>
  //     <div className='job-form-column'>
  //       <label className="job-form-label">{field2.label}</label>
  //       <input type="text" onChange={handleOnChange} name={field2.name} placeholder='Type here...' className="job-form-input" /> */}
  //     </div>
  //   </div>)
  // }

  const [jobDetails, setJobDetails] = useState({
    title: "",
    department: "",
    industry: "",
    location: "",
    description: ""
  });
  
  //  Patterns

  const titlePattern = /^[a-zA-Z]+$/;
  const departmentPattern = /^[a-zA-Z]+$/;
  const industryPattern = /^[a-zA-Z]+$/;
  const locationPattern = /^[ A-Za-z0-9_@./#&+-]*$/;
  const descriptionPattern = /^[a-zA-Z]+$/;

  function handleOnChange(event) {
    const target = event.target;

    const name = target.name;
    const value = target.value;

    setJobDetails({
      ...jobDetails,
      [name]: value
    });
  }

  function checkErrorSections(event){
    

    if(!titlePattern.test(jobDetails.title)){
      toast.error('Check your Title section !')
      return false
    } 
    else if(!departmentPattern.test(jobDetails.department)){
      toast.error('Check your Department section !')
      return false
    }
    else if(!industryPattern.test(jobDetails.industry)){
      toast.error('Check your Industry section !')
      return false
    }
    else if(!locationPattern.test(jobDetails.location)){
      toast.error('Check your Location section !')
      return false
    }
    else if(!descriptionPattern.test(jobDetails.description)){
      toast.error('Check your Description section !')
      return false
    }
    return true;

  }

  function checkEmptySections(){
    if(jobDetails.title===""){
      toast.warn("Title section can't be empty")
      return false
    }

    else if(jobDetails.department===""){
      toast.warn("Department section can't be empty")
      return false
    }
    else if(jobDetails.industry===""){
      toast.warn("Industry section can't be empty")
      return false
    }
    else if(jobDetails.location===""){
      toast.warn("Location section can't be empty")
      return false
    }
    else if(jobDetails.description===""){
      toast.warn("Description section can't be empty")
      return false
    }
      return true;

  }

  function handleSubmit(event) {
    event.preventDefault();
    if(checkEmptySections() && checkErrorSections()){
      // TODO Add submit function
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
          {rowGenrator(
            {label: "Job title", name: "title"},
            {label: "Department", name: "department"}
          )}
          {rowGenrator(
            {label: "Industry", name: "industry"},
            {label: "Location", name: "location"}
          )}

          {/* {formFields(
            {label:"Job title", name: "title"},
            {label:"Department", name: "department"}
          )}
           {formFields(
            {label:"Industry", name: "industry"},
            {label:"Location", name: "location"}
          )} */}
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
            <textarea className="job-form-textarea" onChange={handleOnChange} name='description' placeholder='Type here....' />
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

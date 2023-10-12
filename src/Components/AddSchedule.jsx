import React from 'react'

const AddSchedule = () => {
  return (
    <div className='teacher-form'>


      <div className='input-cont'>
      <p>Course</p>
        <select>
          <option value=''>Select Course</option>
          <option value=''>Product Design</option>
          <option value=''>Frontend Development</option>
          <option value=''>Graphics Design</option>
        </select>

        <input type='text' placeholder='Day 1'/>
        <input type='text' placeholder='Day 2'/>
        <input type='text' placeholder='teacher 1'/>
        <input type='text' placeholder='teacher 2'/> 
      
      </div>

      <div className='input-cont'>
        
      <p>Upload Photo</p>
        <input type='file' className='file'/>

      
        <input type='text' placeholder='time 1'/>
        <input type='text' placeholder='time 2'/>

        <select>
          <option value=''>Select Title1</option>
          <option value=''>Employee</option>
          <option value=''>Intern</option>
        </select>

        <select>
          <option value=''>Select Title2</option>
          <option value=''>Employee</option>
          <option value=''>Intern</option>
        </select>
       
      
      </div>
    
    
    </div>
  )
}


export default AddSchedule
import React from 'react'

const AddClass = () => {
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

        <input type='text' placeholder='Day'/>
        <input type='text' placeholder='teacher'/>
        
      
      </div>

      <div className='input-cont'>
      
        
        <p>Select Title</p>
        <select>
          <option value=''>Select Title1</option>
          <option value=''>Employee</option>
          <option value=''>Intern</option>
        </select>

        <input type='text' placeholder='time'/>

       <input type="number" name="" id="" placeholder='Attendance'/>
       
      
      </div>
    
    
    </div>
  )
}


export default AddClass
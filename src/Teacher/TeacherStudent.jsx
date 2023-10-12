import React, {useState} from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import sun from '../Images/sun.png'
import Filter from '../Components/Filter';
import SearchInput from '../Components/SearchInput';
import edit from '../Images/edit.png';
import TeacherSidebar from './TeacherSidebar';



const TeacherStudent = () => {
  const Students = [
    {
        img: sun,
        name: 'Ngowari Princess',
        role: "Product Designer",
        tel: '+23423456789',
        email: 'princessngowari@gmail.com',
        days: 'Mon, Thurs',
        classDuration:'3months',
        totalClass:'24',
        presentClass:'0',
        missedClass:'0',
        edit:edit

    },

    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Wed, Fri',
      classDuration:'3months',
      totalClass:'24',
      presentClass:'0',
      missedClass:'0',
      edit:edit

    },
     
    {
      img: sun,
      name: 'Ngowari Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'princessngowari@gmail.com',
      days: 'Mon, wed',
      classDuration:'3months',
      totalClass:'24',
      presentClass:'0',
      missedClass:'0',
      edit:edit

    },

    {
      img: sun,
      name: 'Glory Princess',
      role: "Product Designer",
      tel: '+23423456789',
      email: 'gloryngowari@gmail.com',
      days: 'Mon, Fri',
      classDuration:'3months',
      totalClass:'24',
      presentClass:'0',
      missedClass:'0',
      edit:edit

  },

  {
    img: sun,
    name: 'Ngowari Princess',
    role: "Product Designer",
    tel: '+23423456789',
    email: 'princessngowari@gmail.com',
    days: 'Tues, wed',
    classDuration:'3months',
    totalClass:'24',
    presentClass:'0',
    missedClass:'0',
    edit:edit
  }
      
    
];



  


  return (
    <div>
        <Header/>

        <div className='content'>
        <div className='dark'></div>
           <TeacherSidebar/>
            <div className='right-content'>
            <div className='courses'>
              <div className='top-flex'>

                  <SearchInput/>

                  <Filter/>
              

              </div>
            </div>

              <div className='add'>
              {/* <button onClick={() => setFormIsOpen(true)} style={{cursor:'pointer'}}>Add Students</button> */}
              </div>

              <div className='employee'>
              
                <h2>Students</h2>
              
                <div className='cards'>

                {Students && Students.map(({img,name,role,tel,email,days,classDuration,totalClass,presentClass,missedClass},index)=>{
                  return(
                    <div className='card'>
                      {/* <img src={edit} className='edit' style={{cursor:'pointer'}} onClick={() => setEditIsOpen(true)}/> */}
                      <img src={img}/>
                      <h3>{name}</h3>
                      <p>{role}</p>

                      <div className='white-bg'>
                        <p>Phone number</p>
                        <h5> {tel}</h5>

                        <p>Email</p>
                        <h5> {email}</h5>

                        <p>Class days</p>
                        <h5> {days}</h5>

                        <div className='count'>
                          <div className='count-left'>
                            <p>Class duration</p>
                            <h3>{classDuration}</h3>
                          </div>
                          <div className='count-left'>
                            <p>Total classes</p>
                            <h3>{totalClass}</h3>
                          </div>
                        </div>


                        <div className='count'>
                          <div className='count-left'>
                            <p style={{color:'green'}}>Class Present</p>
                            <h3>{presentClass}</h3>
                          </div>
                          <div className='count-left'>
                            <p style={{color:'red'}}>Class Missed</p>
                            <h3>{missedClass}</h3>
                          </div>
                        </div>

                      </div>

                    </div>

                    )
                  })}
                    


                </div>

                
              
              </div>

            </div>


             

        </div>
    </div>
  )
}


export default TeacherStudent
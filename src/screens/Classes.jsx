import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import SearchInput from '../Components/SearchInput';
import Filter from '../Components/Filter';
import Modal from "react-modal";
import AddClass from '../Components/AddClass';



const Classes = () => {

  const [isFormOpen, setFormIsOpen] = useState(false);
  const toggleFormModal = () => {
    setFormIsOpen(!isFormOpen);
  };

    const Classes= [
      {
        course: 'Product Design',
        name:'Ephraim',
        day: 'Monday',
        time:'12:00pm',
        attend: '15',
        role1: 'Employee',
        
    },
    
    {
      course: 'Graphics Design',
      name:'Vincaent',
      day: 'Tuesday',
      time:'09:00am',
      attend: '22',
      role1: 'Employee',
      
    },
         
    {
      course: 'Backend',
      name:'Ephraim',
      day: 'Monday',
      time:'2:00pm',
      attend: '5',
      role1: 'Intern',
      
    },
    
    {
      course: 'Cybersecurity',
      name:'Racheal',
      day: 'Friday',
      time:'1:00pm',
      attend: '13',
      role1: 'Employee',
      
    },
          
        
    ];


  return (
    <div>
        <Header/>

        <div className='content'>
        <div className='dark'></div>
            <Sidebar/>
            <div className='right-content'>
                <div className='courses'>
                    <div className='top-flex'>

                        <SearchInput/>

                        <Filter/>
                    

                    </div>
                </div>


                <div className='create'>
            <button onClick={() => setFormIsOpen(true)} style={{cursor:'pointer'}}>Create Class</button>
          </div>

          <h2 className='course-sch'>Today's Classes</h2>

          <div className='schedule'>

            {Classes && Classes.map(({course,name,day,time,role1,attend},index)=>{
              return(

            <div className='schedule-c'>
              <h3 style={{color:'white'}}>{course}</h3>
              <h4><span className='span1'>{name}</span> <span>{role1}</span></h4>
              <h4><span className='span1'>{day}</span> <span>{time}</span></h4>
  
              <h4><span className='span1'>Attendance</span> <span>{attend}</span></h4>
            
            </div>

            )
                  })}

          
          </div>

              

                
          <Modal
             isOpen={isFormOpen}
             onRequestClose={toggleFormModal}
             contentLabel="Example Modal"
             className={`bg-transparnt`}
             style={{ 
               overlay: {
                 position: "fixed",
                 top: "0",
                 left: 0,
                 right: 0,
                 bottom: 0,
                 backgroundColor: "hsla(0, 0%, 0%, .8)",
                 zIndex:100000,
                 
               },
             }}
           >
             <div className='e-form'>
               <div className='e-form1'>
                 <div className='close'>
                   <button onClick={() => setFormIsOpen(false)} style={{cursor:'pointer'}}>X</button>
                 </div>
                 
                 <form>
 
                   <h4>New Class</h4>
                   <AddClass/>
                   <input type='submit' value='Add' className='add-submit' />
                 
                 </form>
                 
 
               </div>
 
             </div>
             
           </Modal>
              

            </div>
        </div>
    </div>
  )
}

export default Classes
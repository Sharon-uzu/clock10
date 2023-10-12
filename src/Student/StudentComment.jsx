import React, {useState} from 'react';
import Header from '../Components/Header';
import Studentsidebar from './Studentsidebar';
import SearchInput from '../Components/SearchInput';
import refresh from '../Images/refresh.png';
import { BsFillPinFill } from "react-icons/bs";
import Modal from "react-modal";
import AddComments from '../Components/AddComments';



const StudentComment = () => {

  const [isFormOpen, setFormIsOpen] = useState(false);
  const toggleFormModal = () => {
    setFormIsOpen(!isFormOpen);
  };
  

  const Comments = [
    {
        name: 'Ngowari princess - ',
        text: "I noticed that the teacher did not chek our assignments",
        time: '05:15am'

    },

    {  
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },
     
    {  
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },

    {
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },
     
    {
      name: 'Ngowari princess - ',
      text: "I noticed that the teacher did not chek our assignments",
      time: '05:15am'

    },
      
      
    
];

  return (
    <div>
      <Header/>
      <div className='content'>
        <div className='dark'></div>
        <Studentsidebar/>
        <div className='right-content'>
          <div className='comment-top'>
            <div className='search-comment'>
              <SearchInput />
              <img src={refresh}/>

            </div>
          
          </div>

          <h2 className='c-title'>Students Comment</h2>

          <div className='comment-box'>
            {Comments && Comments.map(({name,text,time},index)=>{

              return(
                <div className='comment-list'>
                  <div className='details'>
                    <BsFillPinFill/>
                    <h3>{name}</h3>
                    <p>{text}</p>
                
                  </div>

                  <div className='time'>
                    <p>{time}</p>
                  </div>
                
                </div>

              )
            })}
            
          </div>

         <button classname='add-comment' onClick={() => setFormIsOpen(true)} style={{cursor:'pointer', marginTop:'20px', backgroundColor:'#FFA628', color:'#fff', padding:'10px', borderRadius:'10px'}} >Add Comment</button>
        
        </div>

            {/* STUDENTS SIGN UP MODAL */}

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
 
                   <h4>Add Comment</h4>
                   <AddComments/>
                   <input type='submit' value='Add' className='add-submit' />
                 
                 </form>
                 
 
               </div>
 
             </div>
             
           </Modal>
              

        
    </div>
    </div>
  )
}

export default StudentComment
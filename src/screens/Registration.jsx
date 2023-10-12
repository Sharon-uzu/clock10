import React, {useState} from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import profile from "../Images/profile.png";
import email from "../Images/email.png";
import password from "../Images/password.png";



const Registration = () => {
  
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);


  return (
    <div className='dashb'>
    
      <Header/>

      <div className='content'>
        <div className='dark'></div>
            <Sidebar/>
            <div className='right-content'>

            <h2 className='reg'>Registration</h2>

              <div className='transaction'>
              

                  <div className='menu'>

                      <span  className={`dep ${open ? 'active' : 'inactive'}`} onClick={() => {
                        setOpen(true);
                        setOpen1(false);
                        setOpen2(false);
                      }}>Teacher</span>

                      <span className={`dep2 ${open ? 'inactive' : 'active'}`}  onClick={() => {
                        setOpen(false);
                        setOpen1(true);
                        setOpen2(false)
                      }}>Student</span>

                      
              
                  </div>

                  
                  


                  <div className='forms'>



                        {/* TEACHERS FORM */}

                      <form className={`tab1 ${open ? 'active' : 'inactive'}`}>
                      <div className="inputs reg-input">
                      <div className="input-f">
                          <input type="text" placeholder='Full name' className='input' />
                          <img src={profile} alt="" />
                      </div>
                      

                      <div className="input-f">
                          <input type="text" placeholder='Username' className='input' />
                          <img src={profile} alt="" />
                      </div>

                      <div className="input-f">
                          <input type="email" placeholder='Email' className='input' />
                          <img src={email} alt="" />
                      </div>

                      

                      <div className="input-f">
                          <select name="" id="">
                            <option value=""> Select Course</option>
                            <option value="1"> Frontend</option>
                            <option value="2"> Backend</option>
                            <option value="3"> Frontend</option>
                            <option value="4"> Digital Marketting</option>
                            <option value="5"> CyberSecurity</option>
                            <option value="6"> Data Analysis</option>
                            <option value="7"> Product Design</option>

                          </select>
                          {/* <img src={profile} alt="" /> */}
                      </div>

                      <div className="input-f">
                          <input type="password" placeholder='Password' className='input' />
                          <img src={password} alt="" />
                      </div>

                      {/* <b>Select profile picture</b> */}
                      <div className="input-f">
                        <input type="file" name="" id="" />
                      </div>
                      <div className="input-f inp">
                        <input type="submit" value="Sign Up" className='sub-btn' />
                      </div>
                          
                      </div>
                      </form>


                       {/* STUDENT FORM */}

                        <form className={`tab2 ${open1 ? 'active' : 'inactive'}`}>
                          <div className="inputs reg-input">
                          <div className="input-f">
                              <input type="text" placeholder='Full name' className='input' />
                              <img src={profile} alt="" />
                          </div>
                      

                        <div className="input-f">
                            <input type="text" placeholder='Username' className='input' />
                            <img src={profile} alt="" />
                        </div>

                        <div className="input-f">
                            <input type="email" placeholder='Email' className='input' />
                            <img src={email} alt="" />
                        </div>

                        <div className="input-f">
                          <select name="" id="">
                            <option value=""> Select Track</option>
                            <option value="1"> DSP 100</option>
                            <option value="2"> DSP 300</option>
                            <option value="3"> IT</option>

                          </select>
                          {/* <img src={profile} alt="" /> */}
                        </div>

                        <div className="input-f">
                          <select name="" id="">
                            <option value=""> Select Course</option>
                            <option value="1"> Frontend</option>
                            <option value="2"> Backend</option>
                            <option value="3"> Frontend</option>
                            <option value="4"> Digital Marketting</option>
                            <option value="5"> CyberSecurity</option>
                            <option value="6"> Data Analysis</option>
                            <option value="7"> Product Design</option>





                          </select>
                          {/* <img src={profile} alt="" /> */}
                      </div>

                      <div className="input-f">
                          <input type="password" placeholder='Password' className='input' />
                          <img src={password} alt="" />
                      </div>

                      {/* <b>Select profile picture</b> */}
                      <div className="input-f">
                        <input type="file" name="" id="" />
                      </div>
                      <div className="input-f inp2">
                        <input type="submit" value="Sign Up" className='sub-btn' />
                      </div>
                  </div>
                        </form>

                  
                  </div>
                  
              
              </div>
            
            
              </div>
          </div>   
    </div>
  )
}

export default Registration
import React,{useState} from 'react';
import '../App.css';
import hLogo from "../Images/h-logo.png";
import profile from "../Images/profile.png";
import password from "../Images/password.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Select from 'react-select'

const SignIn = () => {

  const [selectedRole, setSelectedRole] = useState(''); // Initialize with an empty string
  const history = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (selectedRole) {
      case 'admin':
        navigate('/Admin');
        break;
      case 'teacher':
        navigate('/TeacherDashboard');
        break;
      case 'student':
        navigate('/StudentDashboard');
        break;
      default:
        // Handle any other roles or errors
        break;
    }
  };

  const navigate = useNavigate();

  // const saveItem = () => {
  //    navigate('/Admin')
  //  }

  const options = [
    { value: 'admin', label: 'Admin' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'student', label: 'Student' }
  ]

  return (
    <div className='sign'>
          <div className="sign-c">
              <div className="sign-img">
                  <img src={hLogo} alt="" />
              </div>
              <div className="form-c">
                  <form  onSubmit={handleSubmit}>
                  <h2>Welcome to Harvoxx Admin portal</h2>
                  <p>A community of teachers and students present to share ideas and knowledge</p>
                  <h2>Lets sign you in</h2>

                  <div className="inputs">
                      <div className="input-f">
                          <input type="text" placeholder='Username or email' className='input'/>
                          <img src={profile} alt="" />
                      </div>

                      <div className="input-f">
                          <input type="password" placeholder='Password' className='input' />
                          <img src={password} alt="" />
                        </div>
                          

                        {/* <Select className='select' placeholder='Select Role' id="role" name="role" value={selectedRole} onChange={handleRoleChange}/> */}

                        <select className='select' id="role" name="role" value={selectedRole} onChange={handleRoleChange}>
                          <option value="">Select Role</option>
                          <option value="admin">Admin</option>
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                        </select>

                          <div className="forgot">
                              <span className='radio'><input type="radio" name="" id="" /> <span>Remember me</span> </span>
                              <Link to="/Forgot">
                                  <span className='pw' style={{color:"#1A144A", cursor:"pointer"}}>Forgot password</span>
                            </Link>
                          </div>

                          <input type="submit" value="Sign In" className='sub-btn' 
                          // onClick={saveItem} 
                          />
                          <Link to="/SignUp">
                            <span className='dont'>Don't have an account? <span className='up'>Sign up</span></span>
                        </Link>
                           
                  </div>
              </form>
                
              </div>
              
          </div>  
          
    </div>
  )
}

export default SignIn
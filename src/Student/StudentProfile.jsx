import React from 'react';
import profile from '../Images/profile-pix.jpeg'
import Header from '../Components/Header';

const StudentProfile = () => {
  return (
    <>
    <Header/>
    <div className='profile-section'>
      <div className='profile'>
        <div className='profile-c'>
          <img src={profile} alt="" />
          <p>John Doe</p>
          <p>Johny</p>
          <p>08134567876</p>
          <p>john@gmail.com</p>
        </div>
        <div className='prof-edit'>
          <form action="">
            <input type="text" name="" id="" placeholder='Full name'/>
            <input type="text" name="" id="" placeholder='Username'/>
            <input type="tel" name="" id="" placeholder='Phone number'/>
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <input type="submit" value="Edit Profile" className='edit'/>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default StudentProfile
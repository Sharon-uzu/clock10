import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import Header from '../Components/Header';
import SearchInput from '../Components/SearchInput';
import Filter from '../Components/Filter';

const TeacherCourse = () => {
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
          

            <div className='course-card off'>

                <h2>Courses</h2>

                <div className='course-list'>
                
                    <span>Digital Marketting</span>
                    <span>Product Design</span>
                    <span>Frontend Development</span>
                    <span>Data Analysis</span>
                    <span>Backend Development</span>
                    <span>Digital Marketting</span>
                    <span>Digital Marketting</span>
                    <span>Product Design</span>
                    <span>Frontend Development</span>
                
                </div>

                
            
            </div>



         
          

        </div>
    </div>
</div>
)
}

export default TeacherCourse
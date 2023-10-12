
import './App.css';
import Home from './Home';
import Forgot from './screens/Forgot';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Verification from './screens/Verification';
import Change from './Change';
import Admin from './screens/Admin';
import Teachers from './screens/Teachers';
import Students from './screens/Students';
import Schedule from './screens/Schedule';
import Courses from './screens/Courses';
import Classes from './screens/Classes';
import Comment from './screens/Comment';
import Employee from './screens/Employee';
import Intern from './screens/Intern';
import Track from './screens/Track';
import StudentDashboard from './Student/StudentDashboard';
import StudentComment from './Student/StudentComment';
import { Route, Routes } from 'react-router-dom';
import StudentClassReport from './Student/StudentClassReport';
import StudentProfile from './Student/StudentProfile';
import StudentSchedule from './Student/StudentSchedule';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherClasses from './Teacher/TeacherClasses';
import TeacherClassReport from './Teacher/TeacherClassReport';
import TeacherComment from './Teacher/TeacherComment';
import TeacherCourse from './Teacher/TeacherCourse';
import TeacherProfile from './Teacher/TeacherProfile';
import TeacherSchedule from './Teacher/TeacherSchedule';
import TeacherStudent from './Teacher/TeacherStudent';
import Registration from './screens/Registration';



function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Verification' element={<Verification />} />
          <Route path='/Change' element={<Change />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Teachers' element={<Teachers/>} />
          <Route path='/Students' element={<Students/>} />
          <Route path='/Schedule' element={<Schedule/>} />
          <Route path='/Courses' element={<Courses/>} />
          <Route path='/Classes' element={<Classes/>} />
          <Route path='/Comment' element={<Comment/>} />
          <Route path='/Employee' element={<Employee/>} />
          <Route path='/Employee' element={<Employee/>} />
          <Route path='/Intern' element={<Intern/>} />
          <Route path='/Track' element={<Track/>} />
          <Route path='/Registration' element={<Registration/>} />
          <Route path='/StudentDashboard' element={<StudentDashboard/>} />
          <Route path='/StudentComment' element={<StudentComment/>} />
          <Route path='/StudentClassReport' element={<StudentClassReport/>} />
          <Route path='/StudentProfile' element={<StudentProfile/>} />
          <Route path='/StudentSchedule' element={<StudentSchedule/>} />
          <Route path='/TeacherDashboard' element={<TeacherDashboard/>} />
          <Route path='/TeacherClasses' element={<TeacherClasses/>} />
          <Route path='/TeacherClassReport' element={<TeacherClassReport/>} />
          <Route path='/TeacherComment' element={<TeacherComment/>} />
          <Route path='/TeacherCourse' element={<TeacherCourse/>} />
          <Route path='/TeacherProfile' element={<TeacherProfile/>} />
          <Route path='/TeacherSchedule' element={<TeacherSchedule/>} />
          <Route path='/TeacherStudent' element={<TeacherStudent/>} />


          
        </Routes>
    </div>
  );
}

export default App;

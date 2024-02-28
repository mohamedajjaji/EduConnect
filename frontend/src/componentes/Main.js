import {Routes as Switch,Route} from 'react-router-dom';

import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import CourseDetail from "./CourseDetail";
import TeacherDetail from './TeacherDetail';
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';
import CategoryCourses from './CategoryCourses';

// Users
import Login from './User/Login';
import Logout from './User/Logout';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSettings from './User/ProfileSettings';
import ChangePassword from './User/ChangePassword';

// Teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherCourses from './Teacher/TeacherCourses';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import AddCourse from './Teacher/AddCourse';
import UserList from './Teacher/UserList';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import TeacherProfileSettings from './Teacher/TeacherProfileSettings';


function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/popular-courses" element={<PopularCourses />} />
        <Route path="/popular-teachers" element={<PopularTeachers />} />
        <Route path="/category/:category_slug" element={<CategoryCourses />} />
        <Route path="/about" element={<About />} />
        {/* Users */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/favorite-courses" element={<FavoriteCourses />} />
        <Route path="/recommended-courses" element={<RecommendedCourses />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/change-password" element={<ChangePassword />} />
        {/* Teacher */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-logout" element={<TeacherLogout />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-courses" element={<TeacherCourses />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-profile-settings" element={<TeacherProfileSettings />} />
        <Route path="/teacher-change-password" element={<TeacherChangePassword />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
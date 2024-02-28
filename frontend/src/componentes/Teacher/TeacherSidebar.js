import {Link} from 'react-router-dom';

function TeacherSidebar() {
    return (
        <div className="card">
            <div className="list-group list-group-flush">
                <Link to="/teacher-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                <Link to="/teacher-courses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/add-course" className="list-group-item list-group-item-action">Add Course</Link>
                <Link to="/user-list" className="list-group-item list-group-item-action">User List</Link>
                <Link to="/teacher-profile-settings" className="list-group-item list-group-item-action">Profile Settings</Link>
                <Link to="/teacher-change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/teacher-logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>
    );
  }
  
  export default TeacherSidebar;
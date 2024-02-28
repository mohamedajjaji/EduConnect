import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function TeacherLogin() {
    const [teacherLoginData, setTeacherLoginData] = useState({
        'email':'',
        'password':'',
    });

    // Change Element value
    const handleChange = (event) => {
        setTeacherLoginData({
            ...teacherLoginData,
            [event.target.name]:event.target.value
        }); 
    };
    // End

    // Submit Form
    const submitForm = async (event) => {
        event.preventDefault(); // Prevent default form submission

        const teacherFormData = new FormData();
        teacherFormData.append('email', teacherLoginData.email)
        teacherFormData.append('password', teacherLoginData.password)

        try{
            axios.post(baseUrl+'/teacher-login/',teacherFormData)
                .then((response) => {
                    if (response.data.bool === true) {
                        localStorage.setItem('teacherLoginStatus', true);
                        window.location.href ='/teacher-dashboard/';
                    }
            });
        }catch(error){
            console.log(error);
        };
    };
    // End

    useEffect(() => {
        document.title = 'Teacher Login'
    });
    return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-6 offset-3">
                {teacherLoginData.status === 'success' && (
                    <p className="text-success">Login successful</p>
                )}
                {teacherLoginData.status === 'error' && (
                    <p className="text-danger">Login failed. Please check your credentials.</p>
                )}
                <div className="card mt-5">
                    <h5 className="card-header">Teacher Login</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input value={teacherLoginData.email} onChange={handleChange} type="email" className="form-control" name="email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input value={teacherLoginData.password} onChange={handleChange} type="password" className="form-control" name="password"/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" name="remember"/>
                                <label htmlFor="remember" className="form-check-label">Remember Me</label>
                            </div> */}
                            <button onClick={submitForm} type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default TeacherLogin;
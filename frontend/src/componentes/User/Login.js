import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function Login() {
    const [userLoginData, setUserLoginData] = useState({
        'email':'',
        'password':'',
    });

    // Change Element value
    const handleChange = (event) => {
        setUserLoginData({
            ...userLoginData,
            [event.target.name]:event.target.value
        }); 
    };
    // End

    // Submit Form
    const submitForm = async (event) => {
        event.preventDefault(); // Prevent default form submission

        const userFormData = new FormData();
        userFormData.append('email', userLoginData.email)
        userFormData.append('password', userLoginData.password)

        try{
            axios.post(baseUrl+'/login/',userFormData)
                .then((response) => {
                    if (response.data.bool === true) {
                        localStorage.setItem('userLoginStatus', true);
                        window.location.href ='/dashboard/';
                    }
            });
        }catch(error){
            console.log(error);
        };
    };
    // End

    useEffect(() => {
        document.title = 'Student Login'
    });
    return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 col-6 offset-3">
                {userLoginData.status === 'success' && (
                    <p className="text-success">Login successful</p>
                )}
                {userLoginData.status === 'error' && (
                    <p className="text-danger">Login failed. Please check your credentials.</p>
                )}
                <div className="card mt-5">
                    <h5 className="card-header">Student Login</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input value={userLoginData.email} onChange={handleChange} type="email" className="form-control" name="email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input value={userLoginData.password} onChange={handleChange} type="password" className="form-control" name="password"/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="remember"/>
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
  
  export default Login;
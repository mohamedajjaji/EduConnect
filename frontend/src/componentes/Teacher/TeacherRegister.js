import {useEffect,useState} from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function TeacherRegister() {
    const [teacherData, setteacherData]=useState({
        'full_name':'',
        'email':'',
        'password':'',
        'qualification':'',
        'mobile':'',
        'address':'',
        'status':'',
    });
    // Change Element value
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        }); 
    }
    // End

    // Submit Form
    const submitForm = (event) =>{
        event.preventDefault();
        const teacherFormData=new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData.email)
        teacherFormData.append("password", teacherData.password)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("mobile", teacherData.mobile)
        teacherFormData.append("address", teacherData.address)

        try{
            axios.post(baseUrl+'/teacher/',teacherFormData)
                .then((response)=>{
                    setteacherData({
                        'full_name':'',
                        'email':'',
                        'password':'',
                        'qualification':'',
                        'mobile':'',
                        'address':'',
                        'status':'success'
                    });
            });
        }catch(error){
            console.log(error);
            setteacherData({'status':'error'})
        };
    };
    // End

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus === 'true') {
        window.location.href = '/teacher-dashboard/'
    }

    useEffect(() => {
        document.title = 'Teacher Register'
    });
    return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-6 offset-3">
                {teacherData.status==='success' && <p className="text-success">Thanks for your Registeration</p>}
                {teacherData.status==='error' && <p className="text-danger">Something wrong happened!</p>}
                <div className="card">
                    <h5 className="card-header">Teacher Register</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="full-name" className="form-label">Full Name</label>
                                <input value={teacherData.full_name} onChange={handleChange} type="text" className="form-control" name="full_name" pattern="[A-Za-z ]+"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input value={teacherData.email} onChange={handleChange} type="email" className="form-control" name="email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input value={teacherData.password} onChange={handleChange} type="password" className="form-control" name="password"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="qualification" className="form-label">Qualification</label>
                                <input value={teacherData.qualification} onChange={handleChange} type="text" className="form-control" name="qualification"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input value={teacherData.mobile} onChange={handleChange} type="tel" className="form-control" name="mobile"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Skills</label>
                                <textarea value={teacherData.address} onChange={handleChange} className="form-control" name="address" rows="3" defaultValue=""/>
                                <div className="form-text" name="InterestsHelp">Python, JavaScript, React.js, etc ..</div>
                            </div>
                            <button onClick={submitForm} type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default TeacherRegister;
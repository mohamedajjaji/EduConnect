import {useEffect} from 'react';

function Register() {
    useEffect(() => {
        document.title = 'Student Register'
    });
    return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card mt-5">
                    <h5 className="card-header">Student Register</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="full-name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="full-name" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Interests" className="form-label">Interests</label>
                                <textarea className="form-control" id="Interests" rows="3" defaultValue="" required/>
                                <div className="form-text" id="InterestsHelp">Python, JavaScript, React.js, etc ..</div>
                            </div>
                            <button type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Register;
import TeacherSidebar from './TeacherSidebar';

function TeacherProfileSettings() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Profile Settings</h5>
                    <div className="card-body">
                    <div className="mb-3 row">
                        <label htmlFor="full-name" className="col-sm-2 col-form-label">Full Name</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="full-name"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="formFile" className="col-sm-2 col-form-label">Profile Picture</label>
                        <div className="col-sm-10">
                        <input className="form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="email"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="password"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="FormControlTextarea" className="col-sm-2 col-form-label">Skills</label>
                        <div className="col-sm-10">
                        <textarea className="form-control" id="FormControlTextarea" rows="3" defaultValue=""/>
                        <div className="form-text" id="InterestsHelp">Python, JavaScript, React.js, etc ..</div>
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-primary">Update</button>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
  }
  
  export default TeacherProfileSettings;
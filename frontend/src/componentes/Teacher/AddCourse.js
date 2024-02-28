import TeacherSidebar from './TeacherSidebar';

function AddCourse() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                    <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                            <label htmlFor="Title" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="Title"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="Description" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                            <textarea className="form-control" id="Description" rows="3" defaultValue=""/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="formFile" className="col-sm-2 col-form-label">Course Video</label>
                            <div className="col-sm-10">
                            <input className="form-control" type="file" id="formFile"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="Technologies" className="col-sm-2 col-form-label">Technologies</label>
                            <div className="col-sm-10">
                            <textarea className="form-control" id="Technologies" rows="3" defaultValue=""/>
                            </div>
                        </div>
                        <hr />
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
  
  export default AddCourse;
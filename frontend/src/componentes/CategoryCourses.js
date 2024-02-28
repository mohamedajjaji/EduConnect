import {Link} from 'react-router-dom';

function CategoryCourses() {
    return (
        <div className="container mt-4">
            <h3 className="pb-1 mb-4">Python Courses</h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/2"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/2">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/3"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/3">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/4"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/4">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/5"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/5">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/6"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/6">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/7"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/7">Course title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/8"><img src="/django.png" className="card-img-top" alt="Course"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/8">Course title</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination Start */}
            <nav aria-label="Page navigation mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#top">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#top">1</a></li>
                    <li className="page-item"><a className="page-link" href="#top">2</a></li>
                    <li className="page-item"><a className="page-link" href="#top">3</a></li>
                    <li className="page-item"><a className="page-link" href="#top">Next</a></li>
                </ul>
            </nav>
            {/* End Pagination */}
        </div>
    );
  }
  
  export default CategoryCourses;
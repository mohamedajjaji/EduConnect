import {Link, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

function Home() {

    const navigate = useNavigate();

    const handleButtonClick = (route) => {
      // Navigate to the specified route
      navigate(route);
    };

    useEffect(() => {
        document.title = 'EduConnect'
    });
    return (
        <div className="container mt-4">
            {/* start */}
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3">
                <div className="col-md-12 p-lg-5 mx-auto my-5">
                <h1 className="display-3 fw-bold ">Learn without limits</h1>
                <h3 className="fw-normal text-muted mb-3">Bridging Gaps, Empowering Minds: A Collaborative Learning Platform for All Ages.</h3>
                <div className="d-flex gap-3 lead fw-normal">
                    <Link to="/register" className="icon-link">
                    Join for Free
                    <i className="bi-chevron-right"></i>
                    </Link>
                </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            {/* End */}
            {/* Latest Courses */}
            <div className="pb-1 mb-4">
                <h3>Latest Courses 
                    <button className="btn btn-success float-end" onClick={() => handleButtonClick('/all-courses')} type="button">View all</button>
                </h3>
            </div>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/assets/course1.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Coding Chronicles</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/2"><img src="/assets/course2.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/2">EduTech Insights</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/3"><img src="/assets/course3.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/3">Future Thinkers Forum</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/4"><img src="/assets/course4.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/4">Learning Unleashed</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Latest Courses */}
            {/* Popular Courses */}
            <h3 className="pb-1 mb-4 mt-5">Popular Courses 
                <button className="btn btn-success float-end" onClick={() => handleButtonClick('/popular-courses')} type="button">View all</button>
            </h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/assets/course5.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">Python for Beginners</h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                    <span className="float-end">Views: 1204</span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/2"><img src="/assets/course6.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">React JS for Beginners</h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                    <span className="float-end">Views: 1204</span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/3"><img src="/assets/course4.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">Learning Unleashed</h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                    <span className="float-end">Views: 1204</span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/4"><img src="/assets/course1.png" className="card-img-top" alt="Courses"/></Link>
                        <div className="card-body">
                            <h5 className="card-title">Coding Chronicles</h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                    <span className="float-end">Views: 1204</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Popular Courses */}
            {/* Popular Teachers */}
            <h3 className="pb-1 mb-4 mt-5">Popular Teachers 
                <button className="btn btn-success float-end" onClick={() => handleButtonClick('/popular-teachers')} type="button">View all</button>
            </h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher-detail/1"><img src="teacher_avatar.png" className="card-img-top" alt="Teacher"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher-detail/2"><img src="teacher_avatar.png" className="card-img-top" alt="Teacher"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/2">Teacher Name</Link></h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher-detail/3"><img src="teacher_avatar.png" className="card-img-top" alt="Teacher"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/3">Teacher Name</Link></h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/teacher-detail/4"><img src="teacher_avatar.png" className="card-img-top" alt="Teacher"/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/4">Teacher Name</Link></h5>
                        </div>
                        <div className="card-footer">
                                <div className="title">
                                    <span>Rating: 
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span className="me-1">⭐️</span>
                                        <span>⭐️</span>
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Popular Teachers */}
            {/* Student Testimonial */}
            <h3 className="pb-1 mb-4 mt-5">Student Testimonial</h3>
            <div id="carouselExampleDark" className="carousel carousel-dark slide py-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                    </figure>
                    </div>
                    <div className="carousel-item">
                    <figure className="text-center">
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                    </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* End Student Testimonial */}
        </div>
    );
}

export default Home;
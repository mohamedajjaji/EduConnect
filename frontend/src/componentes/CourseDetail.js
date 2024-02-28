import {useEffect} from 'react';
// import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function CourseDetail() {
    // let{course_id}=useParams();
    useEffect(() => {
      document.title = 'Course Detail'
    });
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            {/* Course Title */}
            <h2 className="mb-4">Introduction to React.js</h2>
  
            {/* Course Description */}
            <p>
              This course will cover the fundamental concepts of React.js, a JavaScript library for building user interfaces.
              It is designed to help you get started with React and build interactive and dynamic web applications.
            </p>
  
            {/* Instructor */}
            <div className="mb-4">
              <strong>Instructor:</strong> <Link to="/teacher-detail/:teacher_id">John Doe</Link>
            </div>
  
            {/* Course Content */}
            <div className="mb-4">
              <h4>Course Content</h4>
              <ul>
                <li>Introduction to React</li>
                <li>Components and Props</li>
                <li>State and Lifecycle</li>
                {/* Add more topics */}
              </ul>
            </div>
  
            {/* Enroll Button */}
            <button className="btn btn-primary">Enroll Now</button>
          </div>
  
          {/* Sidebar */}
          <div className="col-md-4">
            {/* Course Image */}
            <img
              src="https://placekitten.com/300/200"  // Replace with your course image URL
              alt="Course"
              className="img-fluid mb-4"
            />
  
            {/* Course Information */}
            <div className="mb-4 mt-4">
              <p><h4>Course Information</h4></p>
              <p><strong>Duration:</strong> 4 weeks</p>
              <p><strong>Level:</strong> Beginner</p>
            </div>
  
            {/* Rating */}
            <div className="mb-4">
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
        
        {/* Course Videos */}
        <div className="card pb-1 mb-4 mt-5">
        <h5 className="card-header">Course Videos</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Introduction to the Course
            <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#videoModal1"><i className="bi-youtube"></i></button>
            {/* Video Modal Start */}
              <div className="modal fade modal-xl" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Introduction to the Course</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* End Video Modal */}
            </li>
            <li className="list-group-item">Get started with an overview of the course content.
            <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#videoModal2"><i className="bi-youtube"></i></button>
            {/* Video Modal Start */}
            <div className="modal fade modal-xl" id="videoModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Get started with an overview of the course content.</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* End Video Modal */}
            </li>
            <li className="list-group-item">Understanding React Components
            <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#videoModal3"><i className="bi-youtube"></i></button>
            {/* Video Modal Start */}
            <div className="modal fade modal-xl" id="videoModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Understanding React Components</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* End Video Modal */}
            </li>
            <li className="list-group-item">Learn about React components and their structure.
            <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#videoModal4"><i className="bi-youtube"></i></button>
            {/* Video Modal Start */}
            <div className="modal fade modal-xl" id="videoModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Learn about React components and their structure.</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* End Video Modal */}
            </li>
            <li className="list-group-item">State Management in React
            <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#videoModal5"><i className="bi-youtube"></i></button>
            {/* Video Modal Start */}
            <div className="modal fade modal-xl" id="videoModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">State Management in React</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* End Video Modal */}
            </li>
            <li className="list-group-item">Explore how to manage state in React applications.
            <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#videoModal6"><i className="bi-youtube"></i></button>
            {/* Video Modal Start */}
            <div className="modal fade modal-xl" id="videoModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Explore how to manage state in React applications.</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* End Video Modal */}
            </li>
          </ul>
        </div>
        
        {/* Related Courses */}
        <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
        <div className="row mb-4">
            <div className="col-md-3">
                <div className="card">
                    <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="Course"/></Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="/detail/1">Card title</Link></h5>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <Link to="/detail/2"><img src="/logo512.png" className="card-img-top" alt="Course"/></Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="/detail/2">Card title</Link></h5>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default CourseDetail;
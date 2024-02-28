import {Link} from 'react-router-dom';

function TeacherDetail() {
    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            {/* Teacher Name */}
            <h2 className="mb-4">John Doe</h2>
  
            {/* Teacher Description */}
            <p>
              This course will cover the fundamental concepts of React.js, a JavaScript library for building user interfaces.
              It is designed to help you get started with React and build interactive and dynamic web applications.
            </p>
  
            {/* Teacher Content */}
            <div className="mb-4">
              <h4>Course Content</h4>
              <ul>
                <li>Introduction to React</li>
                <li>Components and Props</li>
                <li>State and Lifecycle</li>
                {/* Add more topics */}
              </ul>
            </div>
          </div>
  
          {/* Sidebar */}
          <div className="col-md-4">
            {/* teacher Image */}
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
            </svg>
  
            {/* Teacher Information */}
            <div className="mb-4 mt-4">
              <p><h4>Information</h4></p>
              <p><strong>Skills: </strong>
              <Link to="/category/python">Python</Link> ,
              <Link to="/category/reactjs">React.js</Link> ,
              <Link to="/category/javascript">JavaScript</Link></p>
              <p><strong>Recent Course: </strong><Link to="/category/reactjs">React.js Course</Link></p>
            </div>

          </div>
        </div>
        
        {/* Course List */}
        <div className="card pb-1 mb-4 mt-5">
        <h5 className="card-header">Course List</h5>
          <div className="list-group list-group-flush">
            <Link to="/detail/:course_id" className="list-group-item list-group-item-action">Python Course 1</Link>
            <Link to="/detail/:course_id" className="list-group-item list-group-item-action">Python Course 2</Link>
            <Link to="/detail/:course_id" className="list-group-item list-group-item-action">Python Course 3</Link>
            <Link to="/detail/:course_id" className="list-group-item list-group-item-action">React.js Course 1</Link>
            <Link to="/detail/:course_id" className="list-group-item list-group-item-action">React.js Course 2</Link>
            <Link to="/detail/:course_id" className="list-group-item list-group-item-action">JavaScript Course 1</Link>
            <Link to="/detail/:course_id" className="list-group-item list-group-item-action">JavaScript Course 2</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default TeacherDetail;
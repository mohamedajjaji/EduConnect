import {Link} from 'react-router-dom';

function Header() {
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  const userLoginStatus = localStorage.getItem('userLoginStatus')
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src="/logo.svg" alt="EduConnect" width="250" height="30"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex flex-wrap align-items-center">
                  <li><Link className="nav-link" aria-current="page" to="/">
                  <i className="bi bi-house-door fs-4 text-dark-emphasis fw-semibold"> Home</i></Link></li>
                  <li><Link className="nav-link" to="/all-courses">
                  <i className="bi bi-book fs-4 text-dark-emphasis fw-semibold"> Courses</i></Link></li>
                  <li><Link className="nav-link" to="/about">
                    <i className="bi bi-info-circle fs-4 text-dark-emphasis fw-semibold"> About</i></Link></li>
              </ul>
              {/* <form className="d-flex ms-auto" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <div className="dropdown">
                  <button className="btn float-right badge d-flex align-items-center p-1 pe-4 text-success-emphasis bg-success-subtle border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-workspace fs-4 p-1 ps-3 text-dark-emphasis fw-semibold"> Teacher</i>
                  </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {teacherLoginStatus !== 'true' && (
                    <>
                      <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
                      <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                    </>
                  )}
                  {teacherLoginStatus === 'true' && (
                    <>
                    <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/teacher-logout">logout</Link></li>
                    </>
                  )}
                </ul>
              </div>
              <div className="dropdown ms-2">
                <button className="btn float-right badge d-flex align-items-center p-1 pe-4 text-success-emphasis bg-success-subtle border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle fs-4 p-1 ps-3 text-dark-emphasis fw-semibold"> Student</i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {userLoginStatus !== 'true' && (
                    <>
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/register">Register</Link></li>
                    </>
                  )}
                  {userLoginStatus === 'true' && (
                    <>
                    <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/logout">logout</Link></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
        </div>
    </nav>
  );
}

export default Header;
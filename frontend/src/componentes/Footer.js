import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Footer() {

    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
      // Add a scroll event listener to determine when to show/hide the button
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const showButtonThreshold = 200; // Adjust this threshold as needed

        setShowTopButton(scrollY > showButtonThreshold);
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleTopButtonClick = () => {
      // Scroll back to the top when the button is clicked
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: smooth scrolling animation
      });
    };
    return (
      <div className="container">
        <footer className="py-5 mt-5">
          <div className="row">
            {/* First column */}
            <div className="col-6 col-md-2 mb-3">
              <h5>EduConnect</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                <li className="nav-item mb-2"><Link to="/all-courses" className="nav-link p-0 text-body-secondary">Courses</Link></li>
                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
              </ul>
            </div>

            {/* Fourth column */}
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button onClick={handleTopButtonClick} className="btn btn-success" type="button">Subscribe</button>
                </div>
              </form>
            </div>

            {/* Top button */}
            {showTopButton && (
              <button onClick={handleTopButtonClick} className="btn badge d-flex p-1 pe-4 justify-content-lg-end">
              <i className=" bi-arrow-up-circle fs-3 link-body-emphasis"></i>
              </button>
            )}
          </div>
  
          {/* Bottom section */}
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 EduConnect. All rights reserved.</p>
            <ul className="list-unstyled d-flex fs-3 text-dark-emphasis">
                <li><Link to="https://twitter.com/mohamedajjaji"><i className="bi-twitter-x ms-3 link-body-emphasis"></i></Link></li>
                <li><Link to="https://github.com/mohamedajjaji"><i className="bi-github ms-3 link-body-emphasis"></i></Link></li>
                <li><Link to="https://www.linkedin.com/in/mohamedajjaji"><i className="bi-linkedin ms-3 link-body-emphasis"></i></Link></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;  
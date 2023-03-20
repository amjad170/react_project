import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    
    <div className="container-fluid bg-dark px-0">
    <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
            <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                <h1 className="m-0 display-4 text-primary text-uppercase">Men_Salon</h1>
            </a>
        </div>
        <div className="col-lg-9">
            <div className="row gx-0 bg-secondary d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                        <i className="fa fa-envelope text-primary me-2"></i>
                        <h6 className="mb-0">info@example.com</h6>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center py-2">
                        <i className="fa fa-phone-alt text-primary me-2"></i>
                        <h6 className="mb-0">+012 345 6789</h6>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="d-inline-flex align-items-center py-2">
                        <a className="btn btn-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn btn-light btn-square rounded-circle" href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}
                        <Link className="nav-item nav-link active"  to="/">Home</Link>
                        {/* <a href="about.html" className="nav-item nav-link">About</a> */}
                        <Link className="nav-item nav-link"  to="/about">About</Link>
                        {/* <a href="className.html" className="nav-item nav-link">classNamees</a> */}
                        <Link className="nav-item nav-link"  to="/schedule">Schedule</Link>
                        {/* <a href="team.html" className="nav-item nav-link">Trainers</a> */}
                        <Link className="nav-item nav-link"  to="/team">Team</Link>
                        <div className="nav-item dropdown"> 
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                {/* <a href="blog.html" className="dropdown-item">Blog Grid</a> */}
                                <Link className="dropdown-item"  to="/blockGrid">Blog Grid</Link>
                                {/* <a href="detail.html" className="dropdown-item">Blog Detail</a> */}
                                <Link className="dropdown-item"  to="/blogDetail">Blog Detail</Link>
                                {/* <a href="testimonial.html" className="dropdown-item">Testimonial</a> */}
                                <Link className="dropdown-item"  to="/testimonial">Testimonial</Link>
                            </div>
                        </div>
                        {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                        <Link className="nav-item nav-link"  to="/contact">Contact</Link>
                        <Link className="nav-item nav-link"  to="/allCourses">Services</Link>
                        <Link className="nav-item nav-link"  to="/register">Appointment</Link>
                        {/* <a href="http://localhost/react_men_salon_project/salon_project/msms/admin/index.php" className="nav-item nav-link">Admin</a> */}

                        <a href="https://jabed.bdprogrammers.com/msms/admin/index.php" className="nav-item nav-link">Admin</a>
                        


                          
                    </div>
                    <a href="" className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block">Join Us</a>
                </div>
            </nav>
        </div>
    </div>
</div>

    </>
  )
}

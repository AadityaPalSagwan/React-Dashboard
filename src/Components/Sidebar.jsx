// import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (


        <div className="navbar-sb-list p-4">
            <div className="navbar-sb-item mb-5">
                <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">recommended</h5>
                <ul className="navbar-sb-links p-0 list-unstyled">
                    {/* Recommended links */}
                    <li className="navbar-sb-link my-3">
                        <Link to="/intensity" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">  Intensity</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-sb-link my-3">
                        <Link to="/likelihood" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Likelihood</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-sb-link my-3">
                        <Link to="/relevance" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Relevance</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-sb-item mb-5">
                <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">priority</h5>
                <ul className="navbar-sb-links p-0 list-unstyled">
                    {/* Priority links */}
                    <li className="navbar-sb-link my-3">
                        <Link to="/" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                    <i className="fa-solid fa-gauge"></i>
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-sb-link my-3">
                        <Link to="/year" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                    <i className="fa-solid fa-spinner"></i>
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Year</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-sb-link my-3">
                        <Link to="/country" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                    <i className="fa-solid fa-spinner"></i>
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Country</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-sb-link my-3">
                        <Link to="/topic" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                    <i className="fa-solid fa-spinner"></i>
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Topics</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-sb-link my-3">
                        <Link to="/region" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                    <i className="fa-solid fa-spinner"></i>
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">Region</span>
                            </div>
                        </Link>
                    </li>
                    <li className="navbar-sb-link my-3">
                        <Link to="/city" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                    <i className="fa-solid fa-spinner"></i>
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">City</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* <div className="navbar-sb-item mb-5">
                    <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">account</h5>
                    <ul className="navbar-sb-links p-0 list-unstyled">
                        <li className="navbar-sb-link my-3">
                            <a href="#" className="text-decoration-none d-flex align-items-center justify-content-between">
                                <div className="text-light-blue d-flex align-items-center">
                                    <span className="navbar-sb-icon me-3">
                                        <i className="fa-solid fa-clock-rotate-left"></i>
                                    </span>
                                    <span className="navbar-sb-text fs-14 fw-5 text-capitalize">payment</span>
                                </div>
                            </a>
                        </li>
                        <li className="navbar-sb-link my-3">
                            <a href="#" className="text-decoration-none d-flex align-items-center justify-content-between">
                                <div className="text-light-blue d-flex align-items-center">
                                    <span className="navbar-sb-icon me-3">
                                        <i className="fa-regular fa-circle-user"></i>
                                    </span>
                                    <span className="navbar-sb-text fs-14 fw-5 text-capitalize">profile</span>
                                </div>
                            </a>
                        </li>

                        <li className="navbar-sb-link my-3">
                            <a href="#" className="text-decoration-none d-flex align-items-center justify-content-between">
                                <div className="text-light-blue d-flex align-items-center">
                                    <span className="navbar-sb-icon me-3">
                                        <i className="fas fa-network-wired"></i>
                                    </span>
                                    <span className="navbar-sb-text fs-14 fw-5 text-capitalize">referrals</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div> */}

            {/* <div className="navbar-sb-item mb-5">
                <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">misc pages</h5>
                <ul className="navbar-sb-links p-0 list-unstyled">
          
                    <li className="navbar-sb-link my-3">
                        <a href="#" className="text-decoration-none d-flex align-items-center justify-content-between">
                            <div className="text-light-blue d-flex align-items-center">
                                <span className="navbar-sb-icon me-3">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <span className="navbar-sb-text fs-14 fw-5 text-capitalize">logout</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>

    )
}

export default Sidebar
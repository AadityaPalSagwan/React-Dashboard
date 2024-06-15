// import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>

            <div className="dashboard-main">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="dashboard-title-text">
                                <h2>Welcome to the Dashboard.</h2>
                            </div>
                            <button type="button" className="fs-18 text-grey-blue">
                                <i className="fas fa-ellipsis-vertical"></i>
                            </button>
                        </div>
                    </div>

                    <div className="overview-section p-4">
                        <div className="row overview-section-title">
                            <h4>Dashboard Overview.</h4>
                            <p className="small text-grey">Check <span className="text-blue">Data</span> history for detailed overview.</p>
                        </div>

                        <div className="row overview-section-list gy-4">
                            {/* Overview section items */}
                            <div className="col-md-6 col-lg-4">
                                <Link to="/Overall" className="text-decoration-none">
                                    <div className="overview-section-item bg-white p-4 ">
                                        <div className="item-top d-flex align-items-center justify-content-between mb-3">
                                            <p className="text-grey mb-0">Data</p>
                                            <span className="info-icon d-flex align-items-center justify-content-center bg-grey text-white fs-8">
                                                <i className="fa-solid fa-question"></i>
                                            </span>
                                        </div>
                                        <div className="item-title text-cyan fs-4 fw-6 mb-1 flex justify-between">
                                            <span className="text-blue  ">Overall Data</span>
                                            <span className="balance-icon align-self-end fs-20 ">
                                                <i className="fa-solid fa-wallet"></i>
                                            </span>
                                        </div>
                                        <div className="item-bottom d-flex align-items-center justify-content-between">

                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <Link to="/country" className="text-decoration-none">
                                    <div className="overview-section-item bg-white p-4 ">
                                        <div className="item-top d-flex align-items-center justify-content-between mb-3">
                                            <p className="text-grey mb-0">Data</p>
                                            <span className="info-icon d-flex align-items-center justify-content-center bg-grey text-white fs-8">
                                                <i className="fa-solid fa-question"></i>
                                            </span>
                                        </div>
                                        <div className="item-title text-cyan fs-4 fw-6 mb-1 flex justify-between">
                                            <span className="text-blue  ">Country Data</span>
                                            <span className="balance-icon align-self-end fs-20 ">
                                                <i className="fa-solid fa-wallet"></i>
                                            </span>
                                        </div>
                                        <div className="item-bottom d-flex align-items-center justify-content-between">

                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <Link to="/region" className="text-decoration-none">
                                    <div className="overview-section-item bg-white p-4 ">
                                        <div className="item-top d-flex align-items-center justify-content-between mb-3">
                                            <p className="text-grey mb-0">Data</p>
                                            <span className="info-icon d-flex align-items-center justify-content-center bg-grey text-white fs-8">
                                                <i className="fa-solid fa-question"></i>
                                            </span>
                                        </div>
                                        <div className="item-title text-cyan fs-4 fw-6 mb-1 flex justify-between">
                                            <span className="text-blue  ">Region Data</span>
                                            <span className="balance-icon align-self-end fs-20 ">
                                                <i className="fa-solid fa-wallet"></i>
                                            </span>
                                        </div>
                                        <div className="item-bottom d-flex align-items-center justify-content-between">

                                        </div>
                                    </div>
                                </Link>
                            </div>


                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
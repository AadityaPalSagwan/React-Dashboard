import { useState } from 'react';
import Sidebar from './Sidebar';

const NavBar = () => {
    const [showNavigationSidebar, setShowNavigationSidebar] = useState(false);

    // const openNavigationSidebar = () => {
    //   setShowNavigationSidebar(true);
    // };

    const closeNavigationSidebar = () => {
        setShowNavigationSidebar(false);
    };

    const toggleNavigationSidebar = () => {
        setShowNavigationSidebar(!showNavigationSidebar);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('navigation-overlay')) {
            setShowNavigationSidebar(false);
        }
    };
    return (
        <>
            <div className="dashboard-pg text-grey-blue">
                <nav className="navigation-bar d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="navigation-bar-left col-6 d-flex align-items-center">
                                <button type="button" className="navbar-open-btn text-grey-blue me-3" onClick={toggleNavigationSidebar}>
                                    <i className="fas fa-bars"></i>
                                </button>
                                <div className="navbar-logo text-[25px] text-blue capitalize">DashBoard
                                    {/* <img src="./src/assets/images/logo.png" alt="site logo" /> */}
                                </div>
                            </div>

                            <div className="navigation-bar-right col-6 d-flex align-items-center justify-content-end">
                                <a href="#" className="profile-btn bg-blue text-white btn-circle me-3">
                                    <i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="notification-btn text-grey-blue">
                                    <i className="fas fa-bell"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {showNavigationSidebar && (
                    <div className="navigation-overlay position-fixed" onClick={handleOverlayClick}></div>
                )}
                <div className={`navigation-sidebar bg-light-grey ${showNavigationSidebar ? 'show-navigation-sidebar' : ''}`}>
                    <div className="navbar-sb-head d-flex justify-content-between align-items-center px-4 text-[25px] text-blue capitalize">DashBoard
                        {/* <img src="./src/assets/images/logo.png" alt="logo" /> */}
                        <button className="navbar-close-btn text-grey-blue" onClick={closeNavigationSidebar}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    </div>

                    <Sidebar />
                </div>
            </div>

        </>

    )
}
export default NavBar
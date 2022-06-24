import React from "react";
import "./Navbar.style.scss"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar-main">
            <ul className="navbar-nav">
                <div className="navbar-item" onClick={() => navigate("/")}>
                    HOME
                </div>
                <div className="navbar-item" onClick={() => navigate("/blogs/")}>
                    BLOGS
                </div>
                <div className="navbar-item" onClick={() => navigate("/about-us/")}>
                    ABOUT US
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
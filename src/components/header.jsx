import React from "react";
import { Link } from "react-router-dom";

function Header({setState}) {
    return(
        <nav className="navbar">
        <div className="container">
            <Link className="navbar-brand" to={'/'}>
                Where in the world?
            </Link>
            <span className="ms-auto btn" role="button" id="theme-switcher" onClick={() => setState()}>
                <i className="fa-solid fa-moon me-2"></i>
                Dark Mode
            </span>
        </div>
    </nav>
    )
}

export default Header
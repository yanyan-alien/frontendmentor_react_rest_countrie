import React from "react";
import { Link } from "react-router-dom";
import {FaMoon, FaRegMoon} from 'react-icons/fa';

function Header({setState, darkState}) {
    console.log(darkState)
    return(
        <nav className="navbar" style={{padding: '10px 0'}}>
        <div className="container">
            <Link className="navbar-brand" to={'/'}>
                Where in the world?
            </Link>
            <span style={{verticalAlign: 'bottom'}} className="ms-auto btn" role="button" id="theme-switcher" onClick={() => setState()}>
                {darkState ? <FaRegMoon style={{size: '16px'}} className="me-2" />: <FaMoon style={{size: '16px'}} className="me-2" />}
                {darkState ? 'Light Mode' : 'Dark Mode'}
            </span>
        </div>
    </nav>
    )
}

export default Header
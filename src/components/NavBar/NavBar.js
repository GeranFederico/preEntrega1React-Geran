import React from "react";
import "./NavBar.css";

import { Link } from "react-router-dom";

import Shop from "../Shop/Shop";

const NavBar = () => {
    return (
    <nav className="Navigation">
    <ul className="List-ul">
        <Link className="Link" to="/">
            Home
        </Link>
        <Link className="Link" to="/about">
            About
        </Link>
        <Link className="Link" to="/contact">
            Contact
        </Link>
        <Shop/>
    </ul>
    </nav>
    );
};

export default NavBar;
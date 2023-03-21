import React from "react";
import "./NavBar.css";

import Shop from "../Shop/Shop";

const NavBar = () => {
    return (
    <nav className="Navigation">
        <ul className="List-ul">
            <li>
                <h1 style={{ color: "white" }} >Compas-Shop</h1>
            </li>
            <li>
                <a href="www.coderhouse.com">Home</a>
            </li>
            <li>
                <a href="www.coderhouse.com">Contact</a>
            </li>
            <li>
                <a href="www.coderhouse.com">About</a>
            </li>
            <li>
                <Shop />
            </li>
        </ul>
    </nav>
    );
};

export default NavBar;
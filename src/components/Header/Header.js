import React from "react";
import "./Header.css";
import img from "./logo.png";

const Header = () => {
    return <div className="Header">
        <img src={img} alt="logo" />
        <h1>Bienvenidos A Compas-Shop</h1>
        <h2>Aqui encontrarás todos los libros de nuestros amigos!</h2>
    </div>
};

export default Header;
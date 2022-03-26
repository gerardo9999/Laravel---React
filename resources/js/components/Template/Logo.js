import React from "react";
import { Link } from "react-router-dom";



const Logo = () => {

    const name = "Sneat";
    const path = "/home"



    return (
        <div className="app-brand demo">
            <Link to={path} className="app-brand-link">
                <span className="app-brand-text demo menu-text fw-bolder ms-2">{name}</span>
            </Link>
            <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
        </div>
    )
}

export default Logo;
import React, { Fragment } from "react";
import { useState } from "react";


const Sidebar = () => {
    const  [menu,setMenu] = useState([
        {}
    ]) ;


    return (
        <Fragment>
            <ul className="menu-inner py-1">
                <li className="menu-item">
                    <a href="index.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </a>
                </li>

                <li className="menu-item active open">
                    <a href="#" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-layout"></i>
                        <div data-i18n="Layouts">Layouts</div>
                    </a>
                    ,
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="layouts-without-menu.html" className="menu-link">
                                <div data-i18n="Without menu">Without menu</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-without-navbar.html" className="menu-link">
                                <div data-i18n="Without navbar">Without navbar</div>
                            </a>
                        </li>
                        <li className="menu-item active">
                            <a href="layouts-container.html" className="menu-link">
                                <div data-i18n="Container">Container</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-fluid.html" className="menu-link">
                                <div data-i18n="Fluid">Fluid</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="layouts-blank.html" className="menu-link">
                                <div data-i18n="Blank">Blank</div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

        
        </Fragment>
    )
}


export default Sidebar;
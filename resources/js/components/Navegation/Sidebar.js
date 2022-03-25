import React, { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [menu, setMenu] = useState([
        { title: "Dasboard", icon: "menu-icon tf-icons bx bx-home-circle" , path : "/Dasboard" },
        { title: "Dasboard", icon: "menu-icon tf-icons bx bx-home-circle" , path : "/Dasboard" },
        { title: "Dasboard", icon: "menu-icon tf-icons bx bx-home-circle" , path : "/Dasboard" },
        { title: "Dasboard", icon: "menu-icon tf-icons bx bx-home-circle" , path : "/Dasboard" },
        { title: "Dasboard", icon: "menu-icon tf-icons bx bx-home-circle" , path : "/Dasboard" }
    ]);


    return (
        <Fragment>
            <ul className="menu-inner py-1">

                {menu.map((item, key) => {
                    return (
                        <li key={key} className="menu-item">
                            <Link to={item.path} className="menu-link">
                                <i className={item.icon}></i>
                                <div data-i18n="Analytics">{item.title}</div>
                            </Link>
                        </li>
                    )
                })}

            </ul>


        </Fragment>
    )
}


export default Sidebar;
import React, { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item"

const Sidebar = () => {

    const menu = [
        { key: 0, title: "Home", icon: "menu-icon tf-icons bx bx-home-circle", path: "/home", submenu: [], dropdown: false },
        { key: 1, title: "Producto", icon: "menu-icon tf-icons bx bx-home-circle", path: "/producto", submenu: [], dropdown: false },
        { key: 2, title: "Categoria", icon: "menu-icon tf-icons bx bx-home-circle", path: "/categoria", submenu: [], dropdown: false }
    ];

    console.log(menu);

    return (
        <Fragment>
            <ul className="menu-inner py-1">
                {menu.map((item,key)=>{
                    console.log(item);
                    return (
                        <Fragment key={key}>
                        <Item
                            item={item}
                        />
                    </Fragment>
                    )
                })}
            </ul>
        </Fragment>
    )
}
export default Sidebar;
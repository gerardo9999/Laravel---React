import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item"


const initClass = {
    producto: 'menu-item',
    categoria: 'menu-item',
    home: 'menu-item',
    subcategoria: 'menu-item',
}


const Sidebar = () => {

    const [activeClass, setActiveClass] = useState(initClass);

    const [menu, setMenu] = useState([
        { key: 0, name: 'producto', title: 'Producto', path: '/producto', dropdown: false, subMenu: [] },
        { key: 1, name: 'categoria', title: 'Categoria', path: '/categoria', dropdown: false, subMenu: [] }
    ]);

    const clickActive = (data) => {
        let producto = data === 'producto' ? 'menu-item active' : 'menu-item';
        let categoria = data === 'categoria' ? 'menu-item active' : 'menu-item';
        let home = data === 'home' ? 'menu-item active' : 'menu-item';

        setActiveClass({
            producto : producto,
            categoria : categoria,
            home: home,
        });
    }

    return (
        <Fragment>

            <ul className="menu-inner py-1">
                {menu.map((option, key) => {
                    return (
                        <Item
                            key={key}
                            item={option}
                            activeClass={activeClass}
                            clickActive={clickActive}
                        ></Item>
                    )
                })}
            </ul>
        </Fragment>
    )
}
export default Sidebar;
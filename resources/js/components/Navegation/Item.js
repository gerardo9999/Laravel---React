// import Dropdown from "./Dropdown";

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Item = props => {
    const { item } = props


    return (
        <li key={item.key} className="menu-item">
            <Link to={item.path} className="menu-link">
                <i className={item.icon}></i>
                <div data-i18n="Analytics">{item.title}</div>
            </Link>
        </li>
    );
}

export default Item;


import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Item = props => {
    const { item, clickActive, activeClass } = props

    return (
        <Fragment key={item.key}>
            <li className={activeClass[item.name]}>
                <Link to={item.path} className="menu-link" onClick={() => clickActive(item.name)}>
                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                    <div data-i18n="Analytics">{item.title}</div>
                </Link>
            </li>
        </Fragment>
    );
}

export default Item;
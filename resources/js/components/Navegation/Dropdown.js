import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        <Fragment>
            <li className="menu-item open">
                <a href="#" onClick={e => e.preventDefault()} className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-layout"></i>
                    <div data-i18n="Layouts">Layouts</div>
                </a>
                <ul className="menu-sub">
                    <li className="menu-item">
                        <Link to="/categoria" className="menu-link">
                            <div data-i18n="Without menu">Without menu</div>
                        </Link>
                    </li>
                </ul>
            </li>

        </Fragment>
    )
};


export default Dropdown;
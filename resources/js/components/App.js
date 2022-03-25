import React from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Producto from "./Modules/Producto";
import Categoria from "./Modules/Categoria";
import Footer from "./Modules/Footer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="app-brand demo">
                            <a href="index.html" className="app-brand-link">
                                <span className="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
                            </a>
                              <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                                <i className="bx bx-chevron-left bx-sm align-middle"></i>
                            </a>
                        </div>

                        <div className="menu-inner-shadow"></div>

                        
                    </aside>
                    {/* <!-- / Menu --> */}

                    {/* <!-- Layout container --> */}
                    <div className="layout-page">
                        {/* <!-- Navbar --> */}

                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar"
                        >
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="#">
                                    <i className="bx bx-menu bx-sm"></i>
                                </a>
                            </div>

                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                {/* <!-- Search --> */}
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                        <i className="bx bx-search fs-4 lh-0"></i>
                                        <input
                                            type="text"
                                            className="form-control border-0 shadow-none"
                                            placeholder="Search..."
                                            aria-label="Search..."
                                        />
                                    </div>
                                </div>
                                {/* <!-- /Search --> */}

                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    {/* <!-- Place this tag where you want the button to render. --> */}
                                    <li className="nav-item lh-1 me-3">
                                        <a
                                            className="github-button"
                                            href="https://github.com/themeselection/sneat-html-admin-template-free"
                                            data-icon="octicon-star"
                                            data-size="large"
                                            data-show-count="true"
                                            aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                                        >Star</a>
                                    </li>

                                    {/* <!-- User --> */}
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                                {/* <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" /> */}
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                {/* <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" /> */}
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-semibold d-block">John Doe</span>
                                                            <small className="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-user me-2"></i>
                                                    <span className="align-middle">My Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-cog me-2"></i>
                                                    <span className="align-middle">Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <span className="d-flex align-items-center align-middle">
                                                        <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                                        <span className="flex-grow-1 align-middle">Billing</span>
                                                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="auth-login-basic.html">
                                                    <i className="bx bx-power-off me-2"></i>
                                                    <span className="align-middle">Log Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!--/ User --> */}
                                </ul>
                            </div>
                        </nav>

                        {/* <!-- / Navbar --> */}

                        {/* <!-- Content wrapper --> */}
                        <div className="content-wrapper">
                            {/* <!-- Content --> */}

                            <div className="container-xxl flex-grow-1 container-p-y">
                                {/* <!-- Layout Demo --> */}
                                <div className="layout-demo-wrapper">
                                    <div className="layout-demo-placeholder">
                                        {/* <img
                                            src="../assets/img/layouts/layout-container-light.png"
                                            className="img-fluid"
                                            alt="Layout container"
                                            data-app-light-img="layouts/layout-container-light.png"
                                            data-app-dark-img="layouts/layout-container-dark.png"
                                        /> */}
                                    </div>
                                    <div className="layout-demo-info">
                                        <h4>Layout container</h4>
                                        <p>Container layout sets a <code>max-width</code> at each responsive breakpoint.</p>
                                    </div>
                                </div>
                                {/* <!--/ Layout Demo --> */}
                            </div>
                            {/* <!-- / Content --> */}

                            {/* <!-- Footer --> */}
                            <Footer></Footer>
                            {/* <!-- / Footer --> */}

                            <div className="content-backdrop fade"></div>
                        </div>
                        {/* <!-- Content wrapper --> */}
                    </div>
                    {/* <!-- / Layout page --> */}
                </div>

                {/* <!-- Overlay --> */}
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
            {/* <!-- / Layout wrapper --> */}

            <div className="buy-now">
                <a
                    href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
                    target="_blank"
                    className="btn btn-danger btn-buy-now"
                >Upgrade to Pro</a>
            </div>
        </BrowserRouter>
    )
}
export default App;
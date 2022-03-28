import React from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Producto from "./Modules/Producto";
import Categoria from "./Modules/Categoria";
import Footer from "./Template/Footer";
import Logo from "./Template/Logo";
import Sidebar from "./Navegation/Sidebar";
import NavBar from "./Navegation/NavBar";


const App = () => {
    return (
        <BrowserRouter>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">

                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <Logo></Logo>
                        <div className="menu-inner-shadow"></div>
                        <Sidebar></Sidebar>
                    </aside>
                    <div className="layout-page">
                        <NavBar></NavBar>

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {/* <div className="layout-demo-wrapper"> */}
                                {/* npm install --save react-redux */}
                                   <div className="card">

                                       <div className="card-body">

                                       </div>
                                   </div>
                                {/* </div> */}
                            </div>
                            <Footer></Footer>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
            
        </BrowserRouter>
    )
}
export default App;
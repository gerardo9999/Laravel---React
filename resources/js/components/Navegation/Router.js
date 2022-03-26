import React from "react";
import { Route, Routes } from "react-router-dom";



const Router = () => {
    return (
        <Routes>
            <Route path="/categoria" element={<Categoria />} />
            <Route path="/producto" element={<Producto />} />
        </Routes>
    )
}
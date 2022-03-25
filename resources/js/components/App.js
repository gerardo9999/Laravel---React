import React from "react";

import { BrowserRouter ,Route, Switch as Routes ,Link} from "react-router-dom";
import Producto from "./Modules/Producto";
import Categoria from "./Modules/Categoria";


const App = () => {
    return (
        <BrowserRouter>
            <Link to={'/categoria'}>Categoria</Link><br></br>
            <Link to={'/producto'}>Producto</Link>
            
            <Routes>
                <Route path="/categoria" element={<Categoria/>} />
                <Route path="/producto" element={<Producto/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;
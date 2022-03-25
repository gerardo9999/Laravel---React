import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";

function Index() {
    return (
        <div className="container">
           <App/>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

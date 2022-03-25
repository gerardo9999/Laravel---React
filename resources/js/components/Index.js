import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from "./App";

function Index() {
    return (
        <Fragment >
           <App/>
        </Fragment>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
import {Provider} from 'react-redux';
import store from './State/index';


function Index() {
    return (
        <Provider store={store} >
           <App/>
        </Provider>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

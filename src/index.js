import React from 'react'
import App from './app';
// import store from './redux/reduxStore';
import store from './redux/toolkitRedux/store';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';


const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
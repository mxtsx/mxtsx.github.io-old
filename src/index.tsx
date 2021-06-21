import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/reduxStore";

ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import axios from 'axios';
import Root from './components/root'
import configureStore from './store/store'
import { setAuthToken } from "./util/session_api_util"
import jwt_decode from 'jwt-decode'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken)

    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decoded
      }
    }
    store = configureStore(preloadedState)

    const currentTime = Date.now / 1000

    if (decoded.exp < currentTime) {
      console.log("logout");
      
    }
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root')

  ReactDOM.render(<Root store={store} />, root);
})



// window.axios = axios;
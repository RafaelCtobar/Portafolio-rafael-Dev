import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { GetContext } from './context/getContext';
import { Router } from 'wouter';
import useHashLocation from './hooks/useHashLocation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router hook={useHashLocation}>
      <GetContext>
        <App />
      </GetContext>
    </Router>
  </React.StrictMode>
)

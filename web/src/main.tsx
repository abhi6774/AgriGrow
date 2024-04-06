import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Profile from './components/Profile.tsx'
import Home from './components/Home.tsx'
// import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" Component={App} />
        <Route path="/Profile" Component={Profile} />
        <Route path="/Home" Component={Home} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

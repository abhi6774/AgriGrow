import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Profile from './profile.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/Profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

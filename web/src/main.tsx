import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
// import Profile from './profile.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element 'root' not found in the document.");
}
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-q4nec2ownojk57i5.us.auth0.com"
    clientId="BEemr2AmqrpH9H5VllyqLHFtJuwvnQ5C"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/Profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);

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
    domain="dev-9lj3u2mo.us.auth0.com"
    clientId="HKi5g5kTN2LMgWPY3HjmW2JYy1c9ye2t"
    authorizationParams={{
      redirect_uri: window.location.origin+"/profile"
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

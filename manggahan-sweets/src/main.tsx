// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import WelcomePage from './Pages/Landing/WelcomePage'; // Your anime dessert page
import './App.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <WelcomePage />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Check your index.html file.");
}
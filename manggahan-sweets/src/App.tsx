import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// --- PAGES ---
import WelcomePage from "./Pages/Landing/WelcomePage.jsx";

export default function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />

        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
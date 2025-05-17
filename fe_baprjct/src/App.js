import React from 'react'
import Home from './pages/home'
import Login from './pages/login';
import PrivacyPolicy from './pages/privacy_policy'
import TermsConditions from './pages/terms_conditions'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

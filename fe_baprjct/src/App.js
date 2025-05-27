import React from 'react'
import Home from './pages/home'
import PrivacyPolicy from './pages/privacy_policy'
import TermsConditions from './pages/terms_conditions'
import Login from './pages/login'
import ForgotPassword from './pages/forgot_password'
import ProjectCatalog from './pages/project_catalog'
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
        <Route path="/forgot_password" element={<ForgotPassword />}/>
        <Route path="/project_catalog" element={<ProjectCatalog />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

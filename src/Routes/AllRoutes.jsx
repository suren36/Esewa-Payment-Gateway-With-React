import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PaymentFailed } from '../pages/PaymentFailed.jsx'
import { PaymentSuccess } from '../pages/PaymentSuccess.jsx'
import { HomePage } from '../pages/HomePage.jsx'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
      <Route path="/PaymentFailed" element={<PaymentFailed />} />
    </Routes>
  )
}

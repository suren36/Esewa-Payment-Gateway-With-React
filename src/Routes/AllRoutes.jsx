import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PaymentFailed } from '../pages/PaymentFailed.jsx'
import { PaymentSuccess } from '../pages/PaymentSuccess.jsx'
import { HomePage } from '../pages/HomePage.jsx'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/payment-failed" element={<PaymentFailed />} />
    </Routes>
  )
}

import React from 'react'

export const PaymentFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p className="text-lg text-gray-700 mb-2">We're sorry, but your payment could not be processed at this time.</p>
      <p className="text-lg text-gray-700 mb-6">Please try again later or contact customer support for assistance.</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => window.location.href = '/'}
      >
        Go to Home
      </button>
    </div>
  )
}

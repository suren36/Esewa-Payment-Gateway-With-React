import React, { use, useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const PaymentSuccess = () => {

const [search] = useSearchParams();
const dataQuery = search.get('data');
const [data,setData]=useState({});

useEffect(() => {

  const resData = atob(dataQuery)
  const resObj = JSON.parse(resData)
  setData(resObj)
  console.log(resObj)},[search])


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="payment-image flex justify-center gap-2">

            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" alt="Payment Successful" style={{ marginTop: '20px', width: '200px' }} />
      </div>

      <h1>Payment Successful</h1>
      <p style={{ fontSize: '20px', color: 'green' }}>Amount Paid: Rs. {data.total_amount}</p>
    </div>
  )
}

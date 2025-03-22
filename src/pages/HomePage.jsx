import { useState,useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import CryptoJS from 'crypto-js'

export const HomePage = () => {
 const [formData, setformData] = useState({

    amount:"10",
    tax_amount:"1",
    total_amount:"11",
    transaction_uuid:uuidv4(), 
    product_code:"EPAYTEST",
    product_service_charge:"0",
    product_delivery_charge:"0",
    success_url:"http://localhost:5173/PaymentSuccess",
    failure_url:"http://localhost:5173/PaymentFailed",
    signed_field_names:"total_amount,transaction_uuid,product_code",
    signature :"",
    secret : "8gBm/:&EnhH.1/q"


  })

//generate signature



const generateSignature = (total_amount, transaction_uuid, product_code ,secret ) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    return CryptoJS.enc.Base64.stringify(hash);
  };

  useEffect(() => {
    if (!formData) return;

    const { total_amount, transaction_uuid, product_code, secret } = formData;

    const hasedSignature = generateSignature(
        total_amount,
        transaction_uuid,
        product_code,
        secret
    );

    console.log(hasedSignature);
    setformData({...formData, signature :  hasedSignature})
}, [formData.total_amount, formData.transaction_uuid, formData.product_code]);  // Added dependency




 

 

  return (
   
    <div className="flex items-center justify-center min-h-screen ">
      <div className="main-form min-w-0 w-full">
        <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST" className="grid place-center max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Checkout</h1>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount</label>
            <input type="text" id="amount" name="amount" value={formData.amount}
              onChange={({target})=> setformData({
                ...formData,amount:target.value,total_amount:target.value})}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <input type="hidden" id="tax_amount" name="tax_amount" value ={formData.tax_amount} required/>
          <input type="hidden" id="total_amount" name="total_amount" value={formData.total_amount} required/>
          <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={formData.transaction_uuid} required/>
          <input type="hidden" id="product_code" name="product_code" value ={formData.product_code} required/>
          <input type="hidden" id="product_service_charge" name="product_service_charge" value={formData.product_service_charge} required/>
          <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value={formData.product_delivery_charge} required/>
          <input type="hidden" id="success_url" name="success_url" value={formData.success_url} required/>
          <input type="hidden" id="failure_url" name="failure_url" value={formData.failure_url} required/>
          <input type="hidden" id="signed_field_names" name="signed_field_names" value={formData.signed_field_names} required/>
          <input type="hidden" id="signature" name="signature" value={formData.signature} required/>

          <div className="mb-4">
            <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">First Name</label>
            <input type="text" id="first_name" name="first_name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">Last Name</label>
            <input type="text" id="last_name" name="last_name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Pay via E-sewa
          </button>
        </form>
      </div>
    </div>
  )
}

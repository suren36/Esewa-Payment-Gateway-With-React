import { useState,useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import CryptoJS from 'crypto-js'
import './App.css'

function App() {
  const [formData, setformData] = useState({

    amount:"10",
    tax_amount:"1",
    total_amount:"11",
    transaction_uuid:uuidv4(), 
    product_code:"EPAYTEST",
    product_service_charge:"0",
    product_delivery_charge:"0",
    success_url:"https://developer.esewa.com.np/success",
    failure_url:"https://developer.esewa.com.np/failure",
    signed_field_names:"total_amount,transaction_uuid,product_code",
    signature :"",
    secret : "8gBm/:&EnhH.1/q"


  })

//generate signature



  const generateSignature=(
    total_amount,
    transaction_uuid,
    product_code,
    secret

  )=>{

    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}&${secret}`
const hash = CryptoJS.HmacSHA256(hashString,secret);

const hashedSignature = CryptoJS.enc.Base64.stringify(hash);
return hashedSignature;


  }


  useEffect(()=>{
    const  {    total_amount,
      transaction_uuid,
      product_code,
      secret} = formData;


      const hasedSignature = generateSignature( total_amount,
        transaction_uuid,
        product_code,
        secret);
        console.log(hasedSignature);
        


  },[])







  return (
    <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
    <input type="text" id="amount" name="amount" value={formData.amount}
    onChange={({target})=> setformData({
      ...formData,amount:target.value,total_amount:target.value})} required/>
    <input type="text" id="tax_amount" name="tax_amount" value ={formData.tax_amount} required/>
    <input type="text" id="total_amount" name="total_amount" value={formData.total_amount} required/>
    <input type="text" id="transaction_uuid" name="transaction_uuid" value={formData.transaction_uuid} required/>
    <input type="text" id="product_code" name="product_code" value ={formData.product_code} required/>
    <input type="text" id="product_service_charge" name="product_service_charge" value={formData.product_service_charge} required/>
    <input type="text" id="product_delivery_charge" name="product_delivery_charge" value={formData.product_delivery_charge} required/>
    <input type="text" id="success_url" name="success_url" value={formData.success_url} required/>
    <input type="text" id="failure_url" name="failure_url" value={formData.failure_url} required/>
    <input type="text" id="signed_field_names" name="signed_field_names" value={formData.signed_field_names} required/>
    <input type="text" id="signature" name="signature" value={formData.signature} required/>
    <input value="Submit" type="submit"/>
    </form>
  ) 
}

export default App

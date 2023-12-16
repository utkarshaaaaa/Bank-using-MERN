import React, { useState } from 'react'
import {Pie} from 'react-chartjs-2'
import '../emi.css'
import {Chart, ArcElement} from 'chart.js'
import  Slider  from '@mui/material/Slider';
Chart.register(ArcElement);
export default function Emi() {
const[loan_amount,set_loan_amount]=useState(10000)
const[interest,setinterest]=useState(1)
const[years,setyears]=useState(12)
const[dark,setdark]=useState(true)

const max_year=360
const amn=10000000
const max_interest=18

const intr=interest/1200
const emi=years ? Math.round(loan_amount * intr / (1-(Math.pow(1/(1+intr),years)))):0
const total_amt=years * emi
var totalAmountOfCredits=Math.round((emi/intr)*(1-Math.pow((1+intr),(-years))))
const TotalAmountInterest=Math.round(total_amt - totalAmountOfCredits)


  return (
    <>
    
    <div className='header'>
        <h1>EMI CACULATOR</h1>
        
    </div>
    <div className='back'>
    <div>
        Amount
        <input type='range' max={amn} min='100000' value={loan_amount} onChange={(e)=>{set_loan_amount(e.target.value)}} step='2000' defaultValue='100000'/>
        <input value={loan_amount} onChange={(e)=>{set_loan_amount(e.target.value)}}/>
        {loan_amount}
    </div>
    <div>
        Interest
        <input type='range' max={max_interest} min='7' value={interest} onChange={(e)=>{setinterest(e.target.value)}}/>
        {interest}
    </div>
    <div>
        Tenure (months)
        <input type='range' max={max_year} min='1' value={years} onChange={(e)=>{setyears(e.target.value)}}/>
        {years}
    </div>
    <div>
        Loan amount:
        {emi}
       
    </div>
    
    <div>
    <table class={dark ? "table table-dark table-hover":"table table-striped table-hover"}>
    <thead>
    <tr>
      <th scope="col">1</th>
      <th scope="col">Loan Amount</th>
      <th scope="col">Interest(%)</th>
      <th scope="col">Tenure (Months)</th>
      <th scope="col">EMI (Monthly)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{loan_amount}</td>
      <td>{interest}</td>
      <td>{years}</td>
      <td>{emi}</td>
    </tr>
    
    
  </tbody>
  <button onClick={()=>{setdark(!dark)}} style={{width:"60px", borderRadius:"50px",backgroundColor:dark ? "black":"white",color:dark ? 'white':"black"}}>{dark ? 'Light' :'Dark'}</button>
  
    </table>
    
    
    </div>
  
    
    <div id="canvas-holder">
        
    
    </div>
    <div className='my-container'>
      <div className='child right-align'><span className='emi'>What is an EMI?</span>
        <p>The Equated Monthly Instalment (or EMI) consists of the principal portion of the loan amount and the interest. Therefore, EMI = principal amount + interest paid on the Car Loan. The EMI, usually, remains fixed for the entire tenure of your loan, and it is to be repaid over the tenure of the loan on a monthly basis.

         Mathematically, EMI is calculated as under:</p></div>
    </div>
    </div>
    <br/>
     <div className='color'>
          <div className='red'></div> <span className='tag'>Total Interest</span>
         
          <div className='blue'></div><span className='tag'>Total Amount </span>
     </div>
   
    
       <Pie  data={{
        labels :['Total Interest','Total Amount'],
        datasets : [{
            data : [TotalAmountInterest,loan_amount],
            backgroundColor : ['red','blue']
        }]
       }}
       
       />
      
       
       
       <canvas id="myChart" width="150" height="100" ></canvas>
      
       
    
   
    </>
  )
}

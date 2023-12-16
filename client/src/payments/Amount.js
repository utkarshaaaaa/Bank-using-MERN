import React, { useEffect, useState,useContext } from 'react'
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import {Data} from '../Context'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

export default function Amount() {

    const{ammount,setammount,useracc_no,setuser_acc_no}=useContext(Data)
    const[amm,setamm]=useState('')
    const[loading,setloading]=useState(false)
    const[acc,setacc]=useState(0)
    const location =useLocation()
    const curr_acc=location.state.data
    console.log(curr_acc)
   

    // useEffect(()=>{
    //   setloading(true)
      
    //   axios.get(`http://localhost:3001/get_user_amount/${useracc_no}`)
    // .then(res => {
    //   setTimeout(() => {
    //     setloading(false)
        
    //     setamm(res.data.amount)    
    //   }, 1000);    

    // })
    // .catch(err => console.log(err))
  

    // },[])
     const amount=()=>{
      setloading(true)
      axios.post(`http://localhost:3001/get_user_amount/${acc}`,{curr_acc})
    .then(res => {
      setTimeout(() => {
        setloading(false)
        setamm(res.data.amount)    
      }, 1000);    

    })
    .catch(err => console.log(err))}
  



  return (
    <div>
      <h1>Balance</h1>

        <br/>
      <input  onChange={(e)=>{setacc(e.target.value)}} placeholder='Enter your acc number...'/>

      <button onClick={amount}> view amount</button>
      
      {
        loading ? 
        <ClipLoader
        color={"#F37A24"}
        loading={loading}
        
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />


      :
      <div>
        
        <h2>{amm}</h2>
      </div>
      

      }
    
      
    
   
    
   
      
      
    </div>
  )
}

import React, { useState } from "react";
import axios from 'axios'
import {Link ,useNavigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'


export default function Reg({id}) {
  const navigate=useNavigate()

    const[name,setname]=useState("")
    const[account_number,setaccountnumber]=useState("")
    const[email,setemail]=useState("")
    const[pic,setpic]=useState("")
    const[password,setpassword]=useState("")
    const[age,setage]=useState("")
    const[dob,setdob]=useState('')
  

   

    const reg=(e)=>{
        e.preventDefault()
        if(age>18){
        axios.post(`http://localhost:3001/reg`,{name,email,password,account_number,pic,dob})
        .then(res=>{console.log(res.data)})
        .catch(err=>console.log(err))}
        else{
            console.log("u are not eligeble for the bank lolllll")
        }
        navigate('/log')
        
        
        
    }
    const reset=()=>{
      setname("")
      setaccountnumber("")
      setage("")
      setpic("")
      setemail("")
      setpassword("")
    }
    console.log(dob)
  



  return (
    <>
    <section class="h-100 bg-dark">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" class="img-fluid"
                style={{bordertopleftradius: ".25rem", borderbottomleftradius: ".25rem"}} />
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Bank Registration Form</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
                      <label class="form-label" for="form3Example1m">Name</label>
                    </div>
                  </div>
                  
                </div>

                

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" value={pic} onChange={(e)=>{setpic(e.target.value)}} />
                  <label class="form-label" for="form3Example8">Your pic URL</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="date" id="form3Example99" class="form-control form-control-lg" value={dob} onChange={(e)=>{setdob(e.target.value)}} />
                  <label class="form-label" for="form3Example99">Age</label>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <select class="select">
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example9" class="form-control form-control-lg"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                  <label class="form-label" for="form3Example9">Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" value={account_number} onChange={(e)=>{setaccountnumber(e.target.value)}} />
                  <label class="form-label" for="form3Example90">Account Number</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" value={age} onChange={(e)=>{setage(e.target.value)}} />
                  <label class="form-label" for="form3Example99">Age</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example97" class="form-control form-control-lg" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                  <label class="form-label" for="form3Example97">Email ID</label>
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg" onClick={reset}>Reset all</button>
                  <Link to='/login'>
                  <button type="button" class="btn btn-warning btn-lg ms-2" onClick={reg}>Login</button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    
    </>

    
  )
}

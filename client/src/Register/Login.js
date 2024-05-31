import React, { useState,useContext } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Data} from '../Context'

export default function Login({id}) {
  const{email,setemail}=useContext(Data)
  const navigate=useNavigate()

 
  
  const[password,setpassword]=useState("")
  const[data,setdata]=useState([])

  const config={
    headers:{"Content-Type":"application/json"},
    withCredentials:true
  }
  

  const login =async(e)=>{
    e.preventDefault()
    await axios.post(`http://localhost:3001/login`,{email,password})
    .then(res=>{
      if(res.data ==="invalid_password"){
        console.log("wrong password")
        
      }
        
        
        setdata([res.data])

        navigate("/home",{state:{data:data}})
    
    } )

    .catch(err=>console.log(err))

    
    console.log(data)
    console.log(email)
    

    
    
}


  return (
    <div>
      <section className="">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{backgroundcolor: "hsl(0, 0%, 96%)"}}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  XyreX Bank <br />
                  <span className="text-primary">ALL TRANSACTION</span>
                </h1>
                <p style={{color: "hsl(217, 10%, 50.8%)"}}>
                  YOUR MONEY IS SAFE IN OUR HANDS
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                              placeholder="Email"
                              value={email}
                              onChange={(e)=>{setemail(e.target.value)}}
                            />
                            <label className="form-label" for="form3Example1">
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            
                            
                          </div>
                        </div>
                      </div>

                     

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          placeholder="password.."
                          value={password}
                          onChange={(e)=>{setpassword(e.target.value)}}
                        />
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                        onClick={login}
                      >
                        Sign up
                      </button>
                       
                        
                      </div>
      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>
      
      
      
    </div>
    
  );
}

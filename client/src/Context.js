import React,{createContext, useState} from 'react'
export const Data=createContext()


export default function Context({children}) {
   
  const[email,setemail]=useState("")
  const[ammount,setammount]=useState(0)
  const[useracc_no,setuser_acc_no]=useState('')

  return (
    <Data.Provider value={{ammount,setammount,useracc_no,setuser_acc_no,email,setemail}}>
       {children}

    </Data.Provider>
    
  )
}

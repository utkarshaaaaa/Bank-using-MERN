import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import '../navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TvIcon from '@mui/icons-material/Tv';
import PublicIcon from '@mui/icons-material/Public';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

import { Parallax, IParallax, ParallaxLayer } from "@react-spring/parallax";
import { Data } from "../Context";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function Home({ id }) {
  const location = useLocation();
  //const {ammount,setammount,useracc_no,setuser_acc_no}=useContext(Data)
  const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
    const parallax = useRef(null)
   
  
  const data = location.state.data;
  console.log(data);
  const[dat,setdat]=useState(data)
  
  // const[ammount,setammount]=useState(0)
  // const[useracc_no,setuser_acc_no]=useState('')
  const [curr_acc, set_curr_acc] = useState();
  const navigate = useNavigate();

  // const changedata=async(e)=>{
  //   //e.preventDefault()

  //   await axios.put(`http://localhost:3001/change/${accno}`,{ammount,useracc_no})
  //   .then(res=>{
  //     if(res.data==="no_balance"){
  //       console.log("no balance")

  //     }else{
  //       console.log("transection completed")
  //     }

  //   })
  //   .catch(err=>console.log(err))

  //    await axios.put(`http://localhost:3001/update_amount`,{ammount,useracc_no})
  //   .then(res=>{
  //     console.log(res)

  //    })
  //    .catch(err=>console.log(err))
  // }
  // console.log(ammount)

  // const data_transfer=(e)=>{
  //   let current_user_accno=e.user.account_number

  //   navigate("/Amount",{state:{data:current_user_accno}})

  // }

  const transfer_data = () => {
    navigate("/Sendamount", { state: { data: data } });
  };

  return (
    <>
    <div>
      {dat.map((e) => {
        return (
          <div>
            
             <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <img src={e.user.pic} width={70} height={75} style={{borderRadius:"50px", alignContent:'center'}} />
      <ul>
        
        <li className="name">Name:</li>
        <li className="name">{e.user.name}</li>
        <li className="name"></li>
        <li className="name"></li>
        <li className="name"></li>
        <li className="name">Account number :</li>
        <li className="name">{e.user.account_number}</li>
        <li onClick={transfer_data}><a >SEND MONEY</a></li>
      </ul>
    </nav>
    </div>


    
        );
      })}
      <br/>
      <div></div>
      <div className="icons">
        <div className="icon"><ShoppingCartIcon sx={{ fontSize: 40 }}/>
        <div className="itens">
          Shopping
        </div>
        </div>
        
        <div className="icon"><LocalOfferIcon sx={{ fontSize: 40 }}/>
        <div className="itens">
          Offers
        </div>
        </div>
        <div className="icon"><LocalMallIcon sx={{ fontSize: 40 }}/>
        <div className="itens">
          Cart
        </div>
        
        </div>
        <div className="icon"><TvIcon sx={{ fontSize: 40 }}/>
        <div className="itens">
          Electronics
        </div>
        
        </div>
        <div className="icon"><ModeOfTravelIcon sx={{ fontSize: 40 }}/>
        <div className="itens">
          Travel
        </div>
        
        </div>
        <div className="icon"><MedicalInformationIcon sx={{ fontSize: 40 }}/>
        <div className="itens">
          Medical
        </div>
        
        </div>
        <div className="icon"><PublicIcon sx={{ fontSize: 40 }}/>
        <div className="itens">
          Connections
        </div>
        
        </div>
      </div>
      <br/>
      <div class="container">
  <div class="row">
    <div class="col-sm-8"><div class="card" >
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/EMI_logo.svg/1200px-EMI_logo.svg.png' class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div class="col-sm-4"><div class="card" >
  <img src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126088.jpg?w=2000" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card payment</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
  </div>
  <div class="row">
    <div class="col-sm"><div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
    <div class="col-sm"><div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
    <div class="col-sm"><div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
  </div>
</div>
<div>
  
</div>

     
      
      
     
    </div>
    </>
  );
}

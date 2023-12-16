
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reg from './Register/Reg'
import Login from './Register/Login';
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Amount from './payments/Amount';
import FirstPage from './home/FirstPage';
import SendAmount from './home/SendAmount';
import Emi from './payments/Emi';
import Page from './home/Page';

function App() {
  const id=uuidv4()
  return (
    <>
    <BrowserRouter>
   
    
    <Routes>
      <Route path="/log" element={<Login id={id}/>}/>
      
      <Route path="/reg" element={<Reg id={id}/>}/>
      <Route path="/home" element={<Home id={id}/>}/>
      <Route path='/amount' element={<Amount/>}/>
      <Route path='/firstpage' element={<FirstPage/>}/>
      <Route path='/sendamount' element={<SendAmount/>}/>
      <Route path='/emi' element={<Emi/>}/>
      <Route path='/page' element={<Page/>}/>


           

    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

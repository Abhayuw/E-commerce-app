import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import About from './About';
import Navbar from './Navbar';
import { CartProvider } from './CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <CartProvider> 

   <BrowserRouter>
         
         <Navbar/>
        
         <Routes>
            
            <Route path='/' element={<App/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='signup'element={<Signup/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='about' element={<About/>}/>
         </Routes>  
    
      
   
   
   
   </BrowserRouter>
  </CartProvider>

 
);



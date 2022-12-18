import React, { useState } from "react";
import CartContext from "./CartContext";
import {useContext} from 'react';
import './Cart.css'

function Cart(){
  const {cart}= useContext(CartContext); 
  
    return(
      <>
     <div className="Cart"> 
      
            
            <div className="cart_element">
               { 
                cart.map((x)=>{
                    return<> 
                    <div>{x}</div>
                  
                  
                    </>})
                
                
                  }
            </div>  
    
     
     </div>   
      
    </> 

    );
}
export default Cart;
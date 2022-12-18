import element_data from './element_data.json'
import './product.css';
import React, { useState } from "react";
import Cart from './Cart';
import CartContext from "./CartContext";
import {useContext} from 'react';

function Product(){
  const {cart, setCart}= useContext(CartContext);
  
  return( 
    <>
        
    { element_data.products.map((x)=>{
        return <>
        <div className='class_product'> 
                
                   <img src={x.img} alt="error loading"/>           
                   <div className='product_name'>{x.name}</div> 
                   <div>{x.author}</div>
                   <div>{x.category}</div>             
                   <div>${x.price}</div> 
                   <button className='btn'
                      onClick={() => {setCart([...cart, x.name]);}}>Add to Cart 
                   </button>          
                </div>
        
               </>
       } )  } 
    
    </>
  );  
}
         
     
    

export default Product;
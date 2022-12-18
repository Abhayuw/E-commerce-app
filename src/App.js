import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import Product from './Product';
import CartContext from "./CartContext";
import {useContext} from 'react';
import{auth} from "./firebase";
import {useEffect} from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import{Link,useNavigate} from "react-router-dom";


function App() {

  const {cart, setCart}= useContext(CartContext);
  
  return (
    
    <> 
    
    <div className='App'>
        <div className='cart_order'>
          <Link to= './Cart'>Go to Cart </Link>
        </div>
        <div className='sidebar'>
                <p>Ad dolore dignissimos asperiores dicta facere optio     quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
                <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus.</p>
        </div>
        <div className='header'>
          
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</h2>
          
        </div>
        <div className='side_bar_placeholder'></div>
    
        <div className='product_container'> 
            <Product/>
        </div>

    </div>
    
    </>
    
    

    );
  }

export default App;

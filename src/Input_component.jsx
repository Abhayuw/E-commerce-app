import React from 'react'
import { useState } from 'react';
import { auth } from './firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import{Link,useNavigate} from "react-router-dom";

export default function Input_component() {
  
 const navigate= useNavigate();
  
 const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
       
  const signin= (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(()=>{navigate('/');})
        .catch((e)=>{alert(e.message)})}
  
  const register= (e)=>{
       e.preventDefault();
       createUserWithEmailAndPassword(auth,email,password).then((e)=>{alert("Account created succesfully");navigate('/')})
      .catch((e)=>{alert(e.message)})
 }
  
  return (
    <form>
        <h5>E-mail</h5>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type= "email"/>
        <h5>Password</h5>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type= "password"/>
        <button onClick={signin} type='submit'>Log In</button>
        <button onClick={register} type='submit'>Create new Account</button>
    </form>
  )
}

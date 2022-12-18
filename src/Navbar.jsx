import './Navbar.css';
import './Login.jsx';
import Login from './Login.jsx';
import About from './About';
import Cart from './Cart';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import{Link,useNavigate} from "react-router-dom";


function Navbar() {
  const nav = useNavigate();
  const [user,loading,error] = useAuthState(auth);
 const signOutClick =()=>{
  auth.signOut();
  nav('/');
  alert("Logged out succesfully");
 }
  return (
    <div className="Navbar">
          <div className='Home_btn'> 
             <Link to= '/'>    Home</Link>
           </div>
        <div className='Login_btn'> 
            {!user&&<Link to= './Login'>Login/Signup</Link>}
            <h3>{user?.email}</h3>
            { user && <button onClick={signOutClick} type='submit'>Log Out</button>}
        </div>
          <div className='About_btn'>
              <Link to= './About'>About</Link>
          </div>
              <div className='Cart_btn'> 
                 <Link to= './Cart'> Cart</Link>
              </div>
              
    </div>
  );
}

export default Navbar;

import React,{useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CompStyle.css';

// import { myContext } from '../Context';
// import logo from "../Assets/logo-regSize.png";


const Navbar=() => {
     const [scrolled,setScrolled]= useState(false);
     const [open,setOpen]= useState( false);
    
    //  const { cartIsOpen, cOpen, amount} = useContext(myContext);
  
    

    //  navbar tiny when scroll
     const handleScroll=() => { 
       window.scrollY>20 ? setScrolled(true): setScrolled(false) ;
       } 
     useEffect(() => { 
      window.addEventListener('scroll',handleScroll) 
    })
    
    let shrink = scrolled ?'nav-header nav-shrink':'nav-header';
   

    
    

    
     

    return (

      <nav className= 'navbar'>
        <h2>flash cards</h2> 
        <div className={shrink}>
        <ul>
        <li><Link to="/">Play</Link></li>
        <li><Link to="/edit">Edit</Link></li>
        </ul>
          
        </div>
              
      </nav>
             
     



    )
  }
  
  export default Navbar;
  
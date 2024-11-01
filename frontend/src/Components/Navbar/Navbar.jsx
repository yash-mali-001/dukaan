import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from'../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] =  useState("shop");



  return (
    <div className='navbar '>
        <div className="nav-logo">
            <img src= {logo}/>
            <p>Kapade LeLo...</p>
        </div>
    
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("dukan")}}> <Link to='/'  style={{textDecoration:'none'}} >SHOP</Link>    {menu === "shop"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}>  <Link to='/mens' style={{textDecoration:'none'}} >MENS</Link>    {menu === "mens"? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link to='/women' style={{textDecoration:'none'}}  >WOMEN</Link>    {menu === "women"? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu("kidos")}}> <Link to='/kidos' style={{textDecoration:'none'}} >KIDOS</Link>    {menu === "kidos"? <hr/> : <></>}</li>
        </ul>
 
        <div className="nav-login-cart">
            <Link to='/login'> <button>Login</button> </Link>
            <Link to='/cart'> <img src={cart_icon}/> </Link>
            
            <div className="nav-cart-count">
                0
            </div>
        </div>

    </div>
  )
}

export default Navbar

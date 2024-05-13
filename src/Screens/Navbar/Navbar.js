import React from 'react'
import { useState, useEffect, useRef  } from 'react';
import logo from '../../images/logo.png'
import cart from '../../images/Cart1 with buy.png'
import avatar from '../../images/avatar.png'
import whishlist from '../../images/Wishlist.png'
import dropdown from '../../images/DropDown.png'
import search from '../../images/search.png'
import bars from '../../images/ambr menu.png'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggleOpen, setToggleOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  };
 

  const toggleSidebar = () => {
    setToggleOpen(!isToggleOpen);
  };

 
  return (
 <>
 <header className='nav-black-head'>
 <div className='container'>
<div className='nav-parent-head'>


<div>

</div>

  <div className='nav-middle'>
<p>Summer Sale For All Swim Suits And Free Express Delivery - 50%!</p>
<div  className="nav-shop-now">
  <p>ShopNow</p>
</div>

</div>

<div className='nav-langauges'>
<p>English</p>
<img src={dropdown} />

</div>
</div>
</div>
</header>
<section className='navbar1'>
  <div className='container'>
    <div className='nav-parent'>
<div className='nav-logo'>
<img src={logo}/>
</div>

<div className='nav-items-middle'>
  <ul>
    <li>Home</li>
    <li>Shop</li> 
    <li>About</li>
    <li>Contact us</li>
  </ul>
</div>

<div className='nav-items-right'>
<div className='sub-nav-right-1'>
  <input type='text' placeholder='What are you looking for?'></input>
  <img src={search}/>
</div>
<div className='sub-nav-right-2'>
  <img src={whishlist}/>
  <img src={cart}/>
  <img src={avatar}       onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} />

  <div className={`small-menu ${isSidebarOpen ? 'open' : ''}`}
        ref={sidebarRef}
     
        > 
    <ul>
      <li>Login</li>
      <li>Signup</li>
      <li>Orders</li>
      <li>Messages</li>
    </ul>
  </div>
</div>
<div className='bars'>
<img src={bars}  onClick={toggleSidebar}/>

<div className={`smallscreen-menu ${isToggleOpen ? 'open1' : ''}`}
        ref={sidebarRef}
     
        > 
    <ul>
      <li>Login</li>
      <li>Signup</li>
      <li>Orders</li>
      <li>Messages</li>
    </ul>
  </div>
</div>
</div>
</div>
  </div>
</section>
 </>
  )
}

export default Navbar

{/* <li><Link to="/home">Home</Link></li>
<li><Link to="/about">About Us</Link></li> */}
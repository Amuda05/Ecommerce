import React from 'react'

const NavBar = () => {
  return (
   <>
<nav>
  <div className="nav">
    <div className="nav-bar">
       <div className="nav">
       <span className='size'>+12312-3-1209 </span>
        <span>SUPPORT@COLORLIB.COM</span>
        <span className='login'>Login</span>
       </div>
    </div>
    <div className="logo">
        <h2>M</h2>
          <div className="page">
            <span id='home'>Home</span>
            <span id='category'>Category</span>
            <span>Men</span>
            <span>Women</span>
            <span>Latest</span>
            <span>
              page
              <s className="block">
              <select name="" id="">
                <option value=""></option>
                <option value="category">Category</option>
                <option value="single">Single</option>
                <option value="Cart">CART</option>
                <option value="CheckOut">CHECKOUT</option>
                <option value="Confermation">CONFERMATION</option>
                <option value="Login">LOGIN</option>
                <option value="Tracking">TRACKING</option>
                <option value="Generic">GENERIC</option>
                <option value="Elements">ELEMENTS</option>
                </select>
              </s>
           
            </span>
          </div>
          
    </div>
    </div>
</nav>
   </>
  )
}

export default NavBar
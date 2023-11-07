import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
    <div className="bg">
            <div className="ll">
            <span className='colo'>About Us</span>
            <br />
                <span>Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit, sed do
                    <br />
                    eiusmod tempor incididunt ut labore
                    <br />
                    dolore magna aliqua.
                </span>
            </div>

            <div className="ll">
                <span className='colo'>
                Newsletter
              </span>
              <br />
              <span>Stay update with our latest</span>
                <p>
                <input type="email" />
                </p>
                <div className="bdc"></div>
            </div>

            <div className="ll">
                 <span className='colo'>
                 Instragram Feed
              </span>

              <div className="un">
                <span> <img src="/src/Componnet/i1.jpg.webp" alt="" /></span>
                <span> <img src="/src/Componnet/i2.jpg.webp" alt="" /></span>
                <span> <img src="/src/Componnet/i3.jpg.webp" alt="" /></span>
                <span> <img src="/src/Componnet/i4.jpg.webp" alt="" /></span>
              </div>


              <div className="un">
                <span> <img src="/src/Componnet/i5.jpg.webp" alt="" /></span>
                <span> <img src="/src/Componnet/i6.jpg.webp" alt="" /></span>
                <span> <img src="/src/Componnet/i7.jpg.webp" alt="" /></span>
                <span> <img src="/src/Componnet/i8.jpg.webp" alt="" /></span>
              </div>
              
            </div>

            
            <div className="ll">
                 <span className='colo'>
                    Follow Us
              </span>
              
              <br />
                <span>Let us be social</span>
            </div>
            </div>
            
            <p className='copy'>Copyright ©2023 All rights reserved | This template is made with  by 
                <span className='col'>Colorlib</span>
            </p>
    </footer>
    
    </>
  )
}

export default Footer
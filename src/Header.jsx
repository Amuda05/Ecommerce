import React from 'react'

const Header = () => {
  return (
    <>
    <main>
        <div className="wrapper">
        <div className="img">
            <img src="/src/Componnet/header-img.png.webp" alt="" />
           </div>
          <div className="percentage">
          <span className='flat'>flat</span>
          <span>75%off</span>
          </div>
           <h1>
           IT’S HAPPENING
           <br />
           THIS SEASON!
           </h1>
        </div>
        <div className="bloc">
           <p className='now'>PURCHASE NOW</p>
           </div>
    </main>
    <section>
    <div className="section " >
<div className="texts">
    <h1>Shop for Different Categories</h1>
    <span>Who are in extremely love with eco friendly system.</span>
</div>
</div>
<div className="imgs ">
    <div className="box  box-container">
        <img src="/src/Componnet/c1.jpg.webp" alt=""  className='image'/>
        <div className="overlay">
        <div class="text">Product For Women</div>
        </div>
    </div>
    <div className="box-container">
        <img src="/src/Componnet/c2.jpg.webp" alt="" />
        <div className="overlay">
            <div className="text">Product For Couple</div>
        </div>
    </div>
    <div className="box-container">
        <img src="/src/Componnet/c4.jpg.webp" alt="" />
        <div className="overlays">
            <div className="text">
                Product For Men
            </div>
        </div>
    </div>
</div>
<div className="grid box-container">
<img src="/src/Componnet/c3.jpg.webp" alt=""  />
<div className="overla">
    <div className="text">Product For Women</div>
</div>
</div>
    </section>
    </>
  )
}

export default Header
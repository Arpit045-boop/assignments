import React from 'react'
import './card.css'
import Header from './Header'
import Footer from './Footer'
function Card() {
  return (
    <div className='card'>
      <Header/>
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
      <Footer/>
    </div>
    

  )
}

export default Card
import React from 'react'
import './footer.css';
import Analytics from './Analytics';
function Footer() {
  return (
    <div className='footer'>
        <Analytics count={"80K"} type={"Followers"}/>
        <Analytics count={"803K"} type={"Likes"}/>
        <Analytics count={"1.4K"} type={"Photos"}/>
    </div>
  )
}

export default Footer
import React from 'react'
import './header.css'

function Header() {
  return (
    <div>
        <div className='imgParent'>
            <img className='image' src='https://media.licdn.com/dms/image/D4D03AQGKEsK6w4RJVQ/profile-displayphoto-shrink_800_800/0/1694267084016?e=1712793600&v=beta&t=0BW3jFqNIIz8G7Kzi3zcU6kxD74aIW_Mg8oRJO6yn6I'/>
        </div>
        <div className='nameage'>
            <h1 style={{marginRight:"10px"}}>Arpit Dadhich</h1>
            <span>24</span>
        </div>
        <div className='city'>
            <p>Jaipur</p>
        </div>

    </div>
  )
}

export default Header
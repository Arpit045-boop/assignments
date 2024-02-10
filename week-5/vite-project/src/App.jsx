// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Card name={"Arpit Dadhich"} about={"I am software developer at Xebia"} Interest={["Programming","Walking","Running"]} /> 
    </>
  )
}

function Card(props){
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    }}>
      <h1>{props.name}</h1>
      <h4>{props.about}</h4>
      <h3>Interests</h3>
      {props.Interest.map((item,index)=>{
        return (
          <li>{item}</li>
        )
      })}
      <div style={{margin:"auto"}}>
      <button style={{"color":"white","backgroundColor":"blue","marginTop":"50px","marginRight":"10px"}}>LinkedIn</button>
      <button style={{"color":"white","backgroundColor":"blue","marginTop":"50px"}}>Twitter</button>
      </div>
      
      
    </div>
  )
}



export default App

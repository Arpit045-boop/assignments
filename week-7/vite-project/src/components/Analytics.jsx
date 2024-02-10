import React from 'react'

function Analytics(props) {
  return (
    <div style={{marginLeft:"30px",marginRight:"30px"}}>
        <h1>{props.count}</h1>
        <span>{props.type}</span>
    </div>
  )
}

export default Analytics
import React, { useState, useEffect } from 'react';

function Timer(){
  const [ count, setCount ] = useState(0)
  function start(){
    setInterval(()=>{
      // setCount(count + 1)
        setCount(count => count + 1)
    },1000)
  }
  return (
    <div>
      <span>{ count }</span>
      <button onClick={ ()=>{ start() } }>开始计时</button>
    </div>
  )
}
export default Timer;
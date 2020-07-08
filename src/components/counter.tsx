import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [ count, setCounter ] = useState(0)
  const uRef = useRef<number>(0);
  const inputElm = useRef<any>(null)
  useEffect(()=>{
    uRef.current = count
    console.log(`当前count是${count}`)
  })
  function handlerAlert(){
    setTimeout(() => {
      alert(count)
    }, 3000);
  }
  function immeAlert(){
    setTimeout(() => {
        alert(count)
    }, 3000);
  }
  function onButtonClick(){
    inputElm.current.focus();
  }
  function add(){
    setCounter((prevState:number)=>{
      console.log('abc',prevState,count)
      return count + 1
    })
  }
  return (
    <div>
      当前数为{ count }
      <input type="text" ref={inputElm}/>
      <button onClick={ add }>加</button>
      <button onClick={ handlerAlert }>弹窗</button>
      <button onClick={ immeAlert }>及时更新</button>
      <button onClick={ onButtonClick }>获取焦点</button>
    </div>
  );
}

export default Counter;
import user from "../models/user";
import React, { useRef, useEffect, useState } from "react";
import styles from './my.module.less'
const Person = () => {
  console.log("useModel", user);
  const [state, actions] = user.useModel();
  const [count, setCount] = useState(0);
  const timer = useRef<any>();
    // 首次加载useEffect方法执行一次设置定时器
    useEffect(() => {
      debugger
      if (count > 5) {
        clearInterval(timer.current);
      }
      timer.current = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
    }, []);
  // count每次更新都会执行这个副作用，当count > 5时，清除定时器
  useEffect(() => {
    debugger
    if (count > 5) {
      clearInterval(timer.current);
    }
  });
  return (
    <div>
      <span className={styles.name}> My name is {state.name}.</span>
      <button onClick={() => actions.changeName("han meimei.")}>btn1</button>
      <h1>count: {count}</h1>
    </div>
  );
};
export default Person;

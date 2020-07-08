import user from "../models/user";
import React from "react";
import styles from './my.module.less'
const Person = () => {
  console.log("useModel", user);
  const [state, actions] = user.useModel();
  return (
    <div>
      <span className={styles.name}> My name is {state.name}.</span>
      <button onClick={() => actions.changeName("han meimei.")}>btn1</button>
      <span>404</span>
    </div>
  );
};
export default Person;

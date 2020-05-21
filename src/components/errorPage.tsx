// import React, { Component } from 'react'
// class ErrorPage extends Component {
//   render(){
//     return (
//       <div>
//         404
//       </div>
//     )
//   }
// }
// export default ErrorPage

import user from "../models/user";
import React from "react";
const Person = () => {
  console.log("useModel", user);
  const [state, actions] = user.useModel();
  return (
    <div>
      <span> My name is {state.name}.</span>
      <button onClick={() => actions.changeName("han meimei.")}>btn1</button>
    </div>
  );
};
export default Person;

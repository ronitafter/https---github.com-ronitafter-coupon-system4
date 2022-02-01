import React from "react";

export const TestComp1 = (props) =>{
   console.log(props);

   const newCounter = props.counter * 2;

   return (<div>TestComp1 {newCounter}</div>);
}
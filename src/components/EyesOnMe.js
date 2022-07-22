// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){

  function handleFocus(event){
    return(
      console.log('Good!')
    )
  }

  function handleBlur(event){
    return(
      console.log('Hey! Eyes on me!')
    )
  }


  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur} >Eyes on me</button>
    </div>
  )
}

export default EyesOnMe
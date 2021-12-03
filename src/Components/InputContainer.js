import React from 'react'
import TextField from "./TextField"

function InputContainer() {
  return (
    <div className="InputContainer block bg-green-100 h-45v flex items-center ">
      <div className="w-11/12 h-5/6 rounded-lg bg-gray-800 rounded-3xl  m-auto">
           <TextField/>
      </div>
    </div>
  );
}

export default InputContainer;

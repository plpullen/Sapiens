import React from 'react'
import TextField from "./TextField"
import ClearBtn from "./Settings/ClearBtn"

function InputContainer() {
  return (
    <div className="InputContainer block bg-green-100 h-45v flex items-center ">
      <div className="w-11/12 h-5/6 rounded-lg bg-gray-800 rounded-3xl  m-auto relative">
           <TextField/>
      <ClearBtn/>
      </div>
    </div>
  );
}

export default InputContainer;

// import './TextField.css';
import React from 'react'

function TextField() {

  return (
    <div className="TextField w-90v	bg-gray-800	rounded-3xl p-4">
    <p className="text-blue-100" contentEditable='true' spellCheck="false">Hello World.</p>
    </div>
  );
}

export default TextField;
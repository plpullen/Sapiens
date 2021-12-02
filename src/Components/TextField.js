// import './TextField.css';
import React from 'react'

function TextField() {

  return (
    <div className="TextField w-screen	h-45v	bg-gray-800	rounded-3xl">
    <p className="text-blue-100	ml-2 mt-4" contentEditable='true' spellCheck="false">Hello World.</p>
    </div>
  );
}

export default TextField;
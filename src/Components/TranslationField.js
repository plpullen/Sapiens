// import './TranslationField.css';
import React from 'react'

function TranslationField() {

  return (
    <div className="TextField w-90v p-4">
    <p className="text-blue-100" contentEditable='true' spellCheck="false">Your translation here.</p>
    </div>
  );
}

export default TranslationField;
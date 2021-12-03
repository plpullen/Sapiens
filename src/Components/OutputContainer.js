import React from 'react'
import TranslationField from './TranslationField';


function OutputContainer() {
  return (
    <div className="OutputContainer block bg-green-100 h-45v flex items-center ">
      <div className="w-11/12 h-5/6 rounded-lg bg-gray-800 rounded-3xl  m-auto">
      <TranslationField/>
      </div>
    </div>
  );
}

export default OutputContainer;

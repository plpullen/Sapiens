import React from 'react'
// import './OutputContainer.css';
// import LangMenu from './settings/LangMenu'
import ExportBtn from './Settings/ExportBtn'
import TranslationField from './TranslationField';


function OutputContainer() {
  return (
    <div className="OutputContainer w-screen h-40v rounded-lg	mt-2 ml-2	bg-gray-800 rounded-3xl	">
      {/* <LangMenu/> */}
      <div className="flex justify-end mr-10">
      <ExportBtn/>
      </div>
      <TranslationField/>
    </div>
  );
}

export default OutputContainer;

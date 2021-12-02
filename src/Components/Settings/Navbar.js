import React from 'react'
import LangMenu from './LangMenu'
import SwitchBtn from "./SwitchBtn"
import ClearBtn from "./ClearBtn.js"
import DiagramBtn from "./DiagramBtn"
import DictBtn from "./DictBtn"
import Logo from "./Logo"
import UploadField from "./UploadField"
import DarkModeBtn from "./DarkModeBtn"

function Navbar() {
  return (
    <div className="Navbar bg-green-100	w-full h-10v flex justify-between items-start p-2">
        <Logo/>
      <div className="flex justify-end items-center	pr-4	"> 
        <LangMenu/>
        <p className="inline-block ">➜</p>
        <LangMenu/>
        <SwitchBtn/> 
        <ClearBtn/>
        <DiagramBtn/>
        <DictBtn/>
       <DarkModeBtn/>
       <UploadField/>
      </div>
    </div>
  );
}

export default Navbar;
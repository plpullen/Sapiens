import React from 'react'
import Navbar from './Settings/Navbar'
import InputContainer from './InputContainer'
import OutputContainer from './OutputContainer'

function App() {
  return (
    <div className="App flex flex-col bg-green-100 h-100v w-screen">
      <Navbar/>
      <InputContainer/> 
      <OutputContainer/>
    </div>
  );
}

export default App;

// import './LangMenu.css';
import React from 'react'

function LangMenu() {
  return (
    <div className="LangMenu inline-block p-4">
      {/* <label for="lang">Choose a Language:</label> */}
      <select name="lang" id="lang" >
        <option value="Select">Select a Language</option>
        <option value="English">English</option>
        <option value="Japanese">Japanese</option>
        <option value="German">German</option>
        <option value="Italian">Italian</option>
      </select>
  </div>

  );
}

export default LangMenu;
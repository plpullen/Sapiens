// import './UploadField.css';
import React from 'react'

function UploadField() {
  return (
    <div className="UploadField ">
<input type="file"
       id="file" name="file"
       accept="image/png, image/jpeg"></input>
    </div>
  );
}

export default UploadField;
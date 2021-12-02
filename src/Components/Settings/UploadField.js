// import './UploadField.css';
import React from 'react'

function UploadField() {
  return (
    <div className="UploadField ">
<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"></input>
    </div>
  );
}

export default UploadField;
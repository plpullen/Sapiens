// import './ExportBtn.css';
import React from 'react'

function ExportBtn() {
  return (
    <div className="ExportBtn box-border h-8 w-8 p-4 border-4 bg-blue-200	rounded-lg	inline-block m-2 flex justify-center	items-center">
      <span className="text-xl "><i class="fas fa-file-download"></i></span>
    </div>
  );
}

export default ExportBtn;
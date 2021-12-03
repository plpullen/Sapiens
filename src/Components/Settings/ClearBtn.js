import React from 'react'

function ClearBtn() {
  return (
    <div className="ClearBtn box-border h-8 w-8 p-4 border-4 bg-blue-200	rounded-3xl	inline-block m-2 flex justify-center	items-center absolute top-2	right-3	">
    {/* <div className="ClearBtn box-border h-8 w-8 p-4 border-4 bg-blue-200	rounded-lg	inline-block m-2 flex justify-center	items-center"> */}
    <span className="text-xl "><i class="fas fa-times" style={{color:'white;'}}></i></span>
    </div>
  );
}

export default ClearBtn;
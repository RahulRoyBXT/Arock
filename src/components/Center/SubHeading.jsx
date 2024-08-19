import React from "react";

function SubHeadings(){
  return (
    <div className="flex justify-between text-xs font-semibold">
      <div className="flex gap-1">
        <div className="bg-white h-15 w-30 rounded-full hover:bg-black cursor-pointer"><img width="30" height="15" src="https://img.icons8.com/bubbles/100/play.png" alt="play"/></div>
        <h1>Play<br/>the Film</h1>
      </div>
      
      <div className="flex gap-10">
        <h1>Creator <br/> Curetor</h1>
        <h1>India <br/> Kolkata</h1>
        </div>
    </div>
  );
}
export default SubHeadings;
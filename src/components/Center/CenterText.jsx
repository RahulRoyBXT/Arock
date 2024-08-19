import React from "react";
import Herotext from "./Herotext";
import SubHeadings from "./SubHeading";
function CenterText(){
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
        <Herotext/>
        <SubHeadings/>
    </div>
  );
}
export default CenterText;
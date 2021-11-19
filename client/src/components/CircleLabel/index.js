import React from "react";

function CircleLabel(props) {
  return (
    <div
      className={"rounded-circle flex-column small d-flex justify-content-center align-items-center position-relative " + props.bgStyle}
      style={{ width:props.width, height: props.height }}
    >
      <div
        className="circle-image position-absolute"
        style={{ fontSize: "4em", opacity: 0.5 }}
      >
        {props.icon}
      </div>
      <h5 className="p-0" style={{ zIndex: 5, fontSize: props.fontSize }}>
        {props.label}
      </h5>
       {props.labeltwo && <h4 className="m-0" style={{ paddingTop:'20px' , zIndex:5, fontSize:'33px'}}>{props.labeltwo}%</h4>}
    </div>
  );
}

export default CircleLabel;

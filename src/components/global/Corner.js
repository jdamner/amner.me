import React from "react";

import Svg from "../../assets/corner1.svg";

export default function Corner({ rotation }) {
  const style = {
    transform: `rotate(${rotation}deg)`
  }
  return (
    <div className="corner" style={style}>
      <Svg />
    </div>
  );
}

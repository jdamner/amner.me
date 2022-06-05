import React from "react";

import Svg from "../../assets/flash.svg";

export default function Flash({ rotation }) {
    const style = {
        transform: `rotate(${rotation}deg)`
    }
    return (
        <div className="flash" style={style}>
            <Svg />
        </div>
    );
}
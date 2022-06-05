import React from "react";

import Sep from "../../assets/sep.svg";

export default function Seperator({ modifier }) {
    const className = 'seperator-wrap' + (modifier ? ` ${modifier}` : '');
    return (
        <div className={className}>
            <Sep />
        </div>
    )
}
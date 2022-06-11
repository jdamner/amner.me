import React from "react";

export default function TabButton({ onClick, name, active, index, image }) {
    return (
        <div 
            className={`tab-button ${active ? "active" : ""}`}
            onClick={onClick} 
            onKeyDown={onClick} 
            role='button' 
            aria-current={active} 
            tabIndex={index}>
                {image ?? null}
            <h3>{ name }</h3>
        </div>
    );
}
import React from "react";

export default function KeyButton() {
    return (
        <>
            <button>
                <div className="w-[60px] h-[60px] bg-grayish flex items-center justify-center 
                hover:invert rounded-l-lg">
                    <img src="../../assets/icons/Key.png" />
                </div>
            </button>
        </>
    )
}
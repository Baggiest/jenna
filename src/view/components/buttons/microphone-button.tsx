import React from "react";

export default function MicrophoneButton() {
    return (
        <>
            <button>
                <div className="w-[100px] h-[100px]  bg-grayish flex items-center justify-center hover:invert">
                    <img src="../../assets/icons/Microphone.png" />
                </div>
            </button>
        </>
    )
}
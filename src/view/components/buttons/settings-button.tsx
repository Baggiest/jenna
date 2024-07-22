import React from "react";

export default function SettingsButton() {
    return (
        <>
            <button>
                <div className="w-[60px] h-[60px] bg-grayish flex items-center justify-center hover:invert rounded-r-lg">
                    <img src="../../assets/icons/Settings.png" />
                </div>
            </button>
        </>
    )
}
import React from "react";

export default function SendButton() {

    return (
        <>
            <button>
                <div className="w-[100px] h-[100px] rounded-r-xl bg-grayish flex items-center justify-center hover:invert hover:rounded-xl">
                    <img src="../../assets/icons/Send.png" />
                </div>
            </button>
        </>
    )
};

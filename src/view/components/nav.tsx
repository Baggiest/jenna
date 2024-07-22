import React from "react";
import MicrophoneButton from "./buttons/microphone-button";
import KeyButton from "./buttons/key-button";
import SettingsButton from "./buttons/settings-button";

export default function Nav() {
    return (
        <>
            <div className="w-[744px] h-[60px] flex justify-between">
                <div>
                    <img src="../../gemini.png" width={"40px"} height={"40px"} className="pt-2" />
                </div>

                <div className="flex justify-around border-solid border-2 px-1">
                    <KeyButton />
                    <SettingsButton />
                </div>
            </div>
        </>
    )
}
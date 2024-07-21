import React from "react";
import ImagePreview from "./components/image-preview";
import NavBar from "./components/nav";
import TextResponse from "./components/text-response";
import AttachButton from "./components/attach-button";
import MicrophoneButton from "./components/microphone-button";
import TextInput from "./components/text-input";
import SendButton from "./components/send-button";

export default function App() {

    return (
        <>
            <div className="w-max-[800px] h-max-[600px] bg-black flex flex-col justify-between py-4">
                <div className="flex justify-center">
                    <NavBar />
                </div>

                <div className="flex justify-around pt-4 px-4">
                    <ImagePreview />
                    <TextResponse />
                </div>

                <div className="flex justify-around px-4 pt-4">
                    <AttachButton />
                    <MicrophoneButton />
                    <TextInput />
                    <SendButton />
                </div>

            </div>
        </>
    )
}
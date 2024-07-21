import React from "react";


export default function Chat() {
    return (
        <>
            <div className="chat-top-display">
                
                <Nav />
            </div>

            <div className="chat-middle-display">
                <ImagePreview />
                <TextResponse />
            </div>

        </>
    )
}
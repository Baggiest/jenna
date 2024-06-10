import { ipcRenderer } from "electron";
import React, { useEffect, useRef, useState } from "react"


// make a component named Listening

export default function Listening() {

    const [isListening, setIsListening] = useState(false);
    const audioStreamRef = useRef<MediaStream | null>(null);
    // add a button for microphone


    // useEffect(() => {
    //     // Listen for the 'toggle-microphone' event from the main process
    //     console.log("toggle microphone");
    //     ipcRenderer.on('toggle-microphone', handleToggleMicrophone);

    //     return () => {
    //         ipcRenderer.removeListener('toggle-microphone', handleToggleMicrophone);
    //     };
    // }, [isListening]);

    const handleToggleMicrophone = () => {

        console.log("handle toggle microphone");

        if (isListening) {
            console.log('Listening stopped');
            stopMicrophoneListening();
        }

        else {
            startMicrophoneListening();
        }

        setIsListening(!isListening);
    };

    const startMicrophoneListening = () => {

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

            navigator.mediaDevices.getUserMedia({ audio: true })

                .then(stream => {

                    audioStreamRef.current = stream;
                    // Handle the audio stream, e.g., start speech recognition
                    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
                    const input = audioContext.createMediaStreamSource(stream);
                    // Further processing of audio input...

                    console.log('Microphone access granted and listening...');
                })

                .catch(err => {
                    console.error('Microphone access denied:', err);
                });
        }

        else {
            console.error('getUserMedia not supported on your browser!');
        }
    };

    const stopMicrophoneListening = () => {

        if (audioStreamRef.current) {

            const tracks = audioStreamRef.current.getTracks();
            tracks.forEach(track => track.stop());
            audioStreamRef.current = null;
            console.log('Microphone listening stopped.');
        }
    };

    return (
        <div>
            <h1>React TypeScript Electron App</h1>
            <p>Press Ctrl + Q to toggle microphone listening</p>
            <p>{isListening ? 'Microphone is listening...' : 'Microphone is off'}</p>
            <button onClick={handleToggleMicrophone}>{isListening ? 'Stop Listening' : 'Start Listening'}</button>
        </div>
    );
}

// now we have this audio input, we'll pass it over to turn it into text

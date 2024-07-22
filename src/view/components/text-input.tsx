import React from "react";

export default function TextInput() {
    return (
        <>
            <div className="w-[380px] h-[100px] bg-red-600">

                <textarea
                    className="hover:rounded-xl rounded-l-xl focus:rounded-xl h-full w-full resize-none bg-grayish white p-3 active:outline-none focus:outline-none font-semibold"
                    placeholder="Write your prompt here :3"
                    spellCheck={false}
                    // onChange={onChange}
                    onSubmit={() => { }}
                />
            </div>
        </>
    )
};

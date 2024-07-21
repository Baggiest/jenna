import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import 'dotenv/config'

// Access your API key as an environment variable (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI("AIzaSyBg2ryLyrzfsSqjd3WHcNClWeRHiJ5jNoc");

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path: string, mimeType: string) {

    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

export default async function generateFromTextAndImage(path_to_images: string[], prompt: string) {

    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const imageParts = [fileToGenerativePart(path_to_images[0], "image/png")]

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

generateFromTextAndImage(["../../assets/screenshots/1.png"], "explain what I'm looking at")
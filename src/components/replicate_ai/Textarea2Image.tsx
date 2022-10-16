import React, { ChangeEvent } from "react";

function ImageGen() {
    const [prompt, setPrompt] = React.useState("Enter a prompt for the AI Image");
    const [image, setImage] = React.useState("");

    const handleSubmit = async () => {
        console.log("Contacting server");
        await fetch("http://localhost:8080", {method: "POST", headers: {"Access-Control-Allow-Origin": "*"}, body: JSON.stringify({"prompt": prompt})})
            .then((response) => response.text())
            .then((text) => setImage(text));
        //image = generatedImage;
        console.log(prompt);
        console.log(image);
    }

    const handleChange = async (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value)
    }

    return (
        <div>
            <textarea id="imagePrompt" name="imagePrompt" onChange={handleChange}>{prompt.toString()}</textarea>
            <button onClick={handleSubmit}>Generate</button>
            <img src={image.toString()}/>
        </div>
    );
}

export default ImageGen;
import React from "react";

export interface Props {
    prompt: string;
}

async function ImageGen({prompt = ""} : Props) {
    const [image, setImage] = React.useState("");

    if (prompt != "") {
        console.log("Contacting server");
        await fetch("http://localhost:8080", {method: "POST", headers: {"Access-Control-Allow-Origin": "*"}, body: JSON.stringify({"prompt": prompt})})
            .then((response) => response.text())
            .then((text) => setImage(text));
        console.log(prompt);
        console.log(image);
    }

    return (
        <div>
            <img src={image.toString()}/>
        </div>
    );
}

export default ImageGen;
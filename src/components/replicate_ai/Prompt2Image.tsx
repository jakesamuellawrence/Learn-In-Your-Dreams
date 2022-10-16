function ImageGen() {
    let prompt = "Enter a prompt for the AI Image";
    let image = "";

    const handlePrompt = async () => {
        console.log("Contacting server");
        await fetch("http://localhost:8080", {method: "POST", headers: {"Access-Control-Allow-Origin": "*"}, body: JSON.stringify({"prompt": prompt})})
            .then((response) => response.text())
            .then((text) => image = text);
        //image = generatedImage;
        console.log(image);
    }

    return (
        <div>
            <textarea id="imagePrompt" name="imagePrompt">{prompt}</textarea>
            <button onClick={handlePrompt}>Generate</button>
            <img src={image}/>
        </div>
    );
}

export default ImageGen;
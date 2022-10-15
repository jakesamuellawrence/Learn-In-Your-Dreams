import Replicate from "replicate-js"

const replicate = new Replicate({token: "..."});

function ImageGen() {
    let prompt = "Enter a prompt for the AI Image";
    let image = "";

    const handlePrompt = async () => {
        console.log("Initiating model");
        const aiModel = await replicate.models.get("replicate/hello-world");
        console.log("Predicting");
        const generatedImage = await aiModel.predict({text: prompt});
        image = generatedImage;
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
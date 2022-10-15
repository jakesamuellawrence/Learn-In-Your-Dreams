import Replicate from "replicate-js"

const replicate = new Replicate({token: "YOUR_TOKEN"});

function ImageGen() {
    let prompt = "Enter a prompt for the AI Image";
    let image = ""

    const handlePrompt = async () => {
        const aiModel = await replicate.models.get("replicate/hello-world");
        const generatedImage = await aiModel.predict({text: prompt});
        image = generatedImage
    }

    return (
        <div>
            <textarea id="imagePrompt" name="imagePrompt">{prompt}</textarea>
            <button onClick={handlePrompt}>Generate</button>
            <img src={image}/>
        </div>
    )
}

export default ImageGen;
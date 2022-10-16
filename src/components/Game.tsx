import React from "react";
import { createImageScentence } from "../data_models/prompts";
import { Template } from "../data_models/Template";
import FillBlanks from "./FillBlanks";
import DisplayMessage from "./longcat/messages";
import ImageGen from "./replicate_ai/Prompt2Img";

function Game() {
    let [difficulty, setDifficulty] = React.useState(1);
    let [creepiness, setCreepiness] = React.useState(1);
    let [showingResults, setShowResults] = React.useState(true);
    let [results, setResults] = React.useState<boolean[]>([]);
    let [currentPrompt, setCurrentPrompt] = React.useState<Template>();
    let [imageUrl, setImageUrl] = React.useState(""); 

    React.useEffect(() => {
        console.log("doing effect");
        loadImage();
    }, [currentPrompt]);

    let submitResults = (results: boolean[]) => {
        setShowResults(true);
        setResults(results);
    }
    
    let goNext = () => {
        if (results.length == 0) {
            setDifficulty(1);
        } else {
            if (results.every((result) => result)) setDifficulty((current) => current+1);
            else setCreepiness((current) => current+1);    
        }
        setShowResults(false);
        setCurrentPrompt(createImageScentence(difficulty));
        setImageUrl("");
    }

    let loadImage = async () => {
        if (currentPrompt == undefined) return;
        await fetch("http://localhost:8080", 
                    {method: "POST", headers: {"Access-Control-Allow-Origin": "*"}, 
                    body: JSON.stringify({"prompt": currentPrompt.toString()})})
                .then((response) => response.text())
                .then((text) => {
                    setImageUrl(text);
                });
    }

    return (
        <div className='container'>
            {currentPrompt != undefined &&
                <div>
                    <ImageGen imageUrl={imageUrl} />
                    <FillBlanks template={currentPrompt} submit={submitResults} showingResults={showingResults} />
                </div>
            }
            <hr />
            {showingResults && 
                <DisplayMessage difficultyLevel={difficulty} creepinessLevel={creepiness} 
                correct={results.every((result) => result)} goNext={goNext} />
            }
        </div>
    );
}

export default Game;
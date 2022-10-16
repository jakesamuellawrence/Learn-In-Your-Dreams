import React from "react";
import { createImageScentence } from "../data_models/prompts";
import FillBlanks from "./FillBlanks";
import DisplayMessage from "./longcat/messages";

function Game() {
    let [difficulty, setDifficulty] = React.useState(1);
    let [creepiness, setCreepiness] = React.useState(1);
    let [showingResults, setShowResults] = React.useState(false);
    let [results, setResults] = React.useState<boolean[]>([]);
    let [currentPrompt, setCurrentPrompt] = React.useState(createImageScentence(difficulty));

    let submitResults = (results: boolean[]) => {
        setShowResults(true);
        setResults(results);
    }
    
    let goNext = () => {
        if (results.some((result) => result)) setDifficulty((current) => current+1);
        if (results.some((result) => !result)) setCreepiness((current) => current+1);    
        setShowResults(false);
        setCurrentPrompt(createImageScentence(difficulty));
        setResults([]);
    }

    return (
        <div className='container'>
            {currentPrompt.toString()}
            <FillBlanks template={currentPrompt} submit={submitResults} showingResults={showingResults} />
            <hr />
            {showingResults && 
                <DisplayMessage difficultyLevel={difficulty} creepinessLevel={creepiness} 
                correct={results.every((result) => result)} goNext={goNext} />
            }
        </div>
    );
}

export default Game;
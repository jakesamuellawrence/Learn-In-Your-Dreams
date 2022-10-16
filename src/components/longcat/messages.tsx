import React from 'react';

export interface Props {
    creepinessLevel: number;
    difficultyLevel: number;
    correct: boolean;
}

function DisplayMessage({creepinessLevel, difficultyLevel, correct} : Props) {
    let message  = "";
    if (correct) {
        if (difficultyLevel >= 0 && difficultyLevel < 50) {
            if (creepinessLevel >= 0 && creepinessLevel < 50) {
                message = "You're kind of good at this..."
            }
            else if (creepinessLevel >=50 && creepinessLevel <= 100) {
                message = "You may be a weird...but there is hope"
            }
        }
        else if (difficultyLevel >= 0 && difficultyLevel <= 100) {
            if (creepinessLevel >= 0 && creepinessLevel < 50) {
                message = "Your mother would disown you."
            }
            else if (creepinessLevel >=50 && creepinessLevel <= 100) {
                message = "Maybe you shouldn't be allowed in public..."
            }
        }
    }
    else {
        if (difficultyLevel >= 0 && difficultyLevel < 50) {
            if (creepinessLevel >= 0 && creepinessLevel < 50) {
                message = "You suck at this, huh?"
            }
            else if (creepinessLevel >=50 && creepinessLevel <= 100) {
                message = "Am I in the presence of the 2022 Guinness World Record holder for stupidness?"
            }
        }
        else if (difficultyLevel >= 50 && difficultyLevel <= 100) {
            if (creepinessLevel >= 0 && creepinessLevel < 50) {
                message = "Fooled you once, shame on you."
            }
            else if (creepinessLevel >=50 && creepinessLevel <= 100) {
                message = "Boogey man's coming for ya"
            }
        }
    }
    return (
        <div className="message">
            <p>Creepiness: {creepinessLevel}</p>
            <p>Difficulty: {difficultyLevel}</p>
            <p>Message: {message}</p>
        </div>
    )

}


export default DisplayMessage;




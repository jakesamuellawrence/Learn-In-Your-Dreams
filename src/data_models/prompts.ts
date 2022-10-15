
import { isMaskType, MaskType } from "./MaskType";
import ConstructTemplate, {Template} from "./Template";

let listOfPrompts: string[] = 
["[OBJECT] in [PLACE]",
"Personification of [EMOTION]",
"[NOUN] and [NOUN]",
"A [EMOTION] [ANIMAL]",
"A person [VERB]",
"[NOUN] standing in [PLACE]",
"A big [NOUN]",
"A small [NOUN]"];

const promptsByDifficulty = new Map();
promptsByDifficulty.set(1,["[OBJECT] in [PLACE]", "A big [OBJECT]", "A small [OBJECT]" ]);
promptsByDifficulty.set(2,["A [EMOTION] [ANIMAL]", "A person [VERB]" ]);
promptsByDifficulty.set(3,["[OBJECT] standing in [PLACE]"]);


let listOfObjects: string[] =
["nose",
"head",
"soap",
"table"];

let listOfPlaces: string[] =
["pub",
"bookshop",
"supermarket",
"office"];

let listOfEmotion: string[] =
["happy",
"sad",
"angry",
"tired",
"confused",
"ecstacy",
"worry"];

let listOfAnimal: string[] =
["dog",
"cat",
"frog",
"sheep",
"cow",
"penguin",
"panda",
"cheetah"];

//Creates a map of the MaskTypes to there respective lists of words
const listMaskConnection = new Map();
listMaskConnection.set(MaskType.EMOTION, listOfEmotion);
listMaskConnection.set(MaskType.ANIMAL, listOfAnimal);
listMaskConnection.set(MaskType.PLACE, listOfPlaces);
listMaskConnection.set(MaskType.OBJECT, listOfObjects);

//A statement to select the prompt (take out later)
let promptChoice: number = 0;

//makes the array of different prompts into an array of Templates based on the difficulty level
function promptDifficultySelection(difficultyLevel: number){
    return (promptsByDifficulty.get(difficultyLevel)).map(ConstructTemplate);
}

//Outputs the scentence to give to the ai image maker
export function createImageScentence(difficultyLevel: number){
    let prompts: Template[]= promptDifficultySelection(difficultyLevel);

    let imageScentence: string ="";
    let promptChoice: number = Math.floor(Math.random()* prompts.length);
    
    for (let i=0; i<prompts[promptChoice].fragments.length;i++){

        if (isMaskType(prompts[promptChoice].fragments[i])){
            let wordList: string[]= listMaskConnection.get(prompts[promptChoice].fragments[i]);
            let randomWord: string= wordList[Math.floor(Math.random()* wordList.length)];
            console.log(randomWord);
            imageScentence+= randomWord+" ";
        }
        else{
            imageScentence+= (prompts[promptChoice].fragments[i] as string)+" ";
        }
    }
    console.log(imageScentence);
    return imageScentence;
}


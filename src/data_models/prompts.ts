import Mask from "./Mask";
import { MaskType } from "./MaskType";
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

const promptsByDifficulty = new Map<number, string[]>();
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
const listMaskConnection = new Map<MaskType, string[]>();
listMaskConnection.set(MaskType.EMOTION, listOfEmotion);
listMaskConnection.set(MaskType.ANIMAL, listOfAnimal);
listMaskConnection.set(MaskType.PLACE, listOfPlaces);
listMaskConnection.set(MaskType.OBJECT, listOfObjects);

//A statement to select the prompt (take out later)
let promptChoice: number = 0;

//makes the array of different prompts into an array of Templates based on the difficulty level
function promptDifficultySelection(difficultyLevel: number){
    return promptsByDifficulty.get(difficultyLevel)?.map(ConstructTemplate);
}

//Outputs the scentence to give to the ai image maker
export function createImageScentence(difficultyLevel: number) {
    if (difficultyLevel == 0) difficultyLevel = 1;
    let prompts = promptDifficultySelection(difficultyLevel);

    if (!prompts) throw new Error("prompt-list was undefined or null");

    let promptChoice: number = Math.floor(Math.random()* prompts.length);
    let prompt = prompts[promptChoice];

    prompt.fragments.forEach((fragment) => {
        if (fragment instanceof Mask && fragment.maskType) {
            let wordList = listMaskConnection.get(fragment.maskType);
            let wordListCopy = [...wordList as string[]];
            shuffleList(wordListCopy);
            let actual = wordListCopy.pop();
            if (!actual) throw new Error("no words in word list");

            fragment.actual = actual;
            fragment.options = [actual];
            for(let i = 0; i < 4 && wordListCopy.length != 0; i++) 
                fragment.options?.push(wordListCopy.pop() as string);

            shuffleList(fragment.options);
        }
    });

    return prompt;
}

function randomChoice(list: any[] | undefined) {
    return list != undefined
        ? list[Math.floor(Math.random()* list.length)] 
        : "undefined";
}

function shuffleList(list: any[]) {
    return list.sort(() => Math.random() - 0.5);
}
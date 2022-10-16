
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
promptsByDifficulty.set(1,[ "[OBJECT]", "[ANIMAL]", "[PLACE]" ]);
promptsByDifficulty.set(2,["A [VERB] [ANIMAL]", "A person [VERB]", "[OBJECT] in [PLACE]", "[ADJECTIVE] person" ]);
promptsByDifficulty.set(3,["[ADJECTIVE] [ANIMAL]","[ADJECTIVE] [OBJECT]","[OBJECT] standing in [PLACE]", "[ANIMAL] [VERB]", "10 [OBJECT]", "[EMOTION] [ANIMAL]", "THE WORLD BEING EATEN BY A [EMOTION] CAT" ]);
promptsByDifficulty.set(4,["[ANIMAL] next to a [ANIMAL]", "Personification of [EMOTION]", "A very [ADJECTIVE] [ANIMAL] [VERB]", "[ADJECTIVE] [ANIMAL] [OBJECT]", "A computer killing a [ANIMAL]"] )

let listOfObjects: string[] =
["balloon",
"bow",
"soap",
"table",
"car",
"flower",
"spoon",
"spounge",
"toothbrush",
"phone",
"bed",
"cake",
"guitar",
"bomb",
"knife",
"gun"
];

let listOfPlaces: string[] =
["pub",
"bookshop",
"supermarket",
"office",
"france",
"america",
"scotland",
"school",
"bank"];

let listOfEmotion: string[] =
["happy",
"sad",
"angry",
"tired",
"confused",
"shy",
"worried",
"disgusted"];

let listOfAnimal: string[] =
["dog",
"cat",
"frog",
"sheep",
"cow",
"penguin",
"panda",
"cheetah",
"tiger"];

let listOfVerbs: string[] =
["running",
"eating",
"jumping",
"cooking",
"drinking",
"writing",
"sleeping",
"fighting"];

let listOfAdjectives: string[] =[
    "blue",
    "clean",
    "beautiful",
    "green",
    "big",
    "small",
    "curly"
]

//scary level lists
let listOfBodyParts: string[] = [
    "nose",
    "eye",
    "arm",
    "leg",
    "head",
    "teeth",
    "hair",
]

let listOfGross: string[] = [
    "broken",
    "destroyed",
    "fat",
    "bloody",
    "ugly",
    "abhorrent",
    "freaky",
    "funny",
    "gross",
    "malnourished"
]

let listOfMonsters: string[] =[
    "ghoul",
    "ghost",
    "zombie",
    "teacher",
    "long cat",
    "hydra",
    "bogey man",
    "dinosaur",
    "pterodactyl"
]

//Creates a map of the MaskTypes to there respective lists of words
const listMaskConnection = new Map();
listMaskConnection.set(MaskType.EMOTION, listOfEmotion);
listMaskConnection.set(MaskType.ANIMAL, listOfAnimal);
listMaskConnection.set(MaskType.PLACE, listOfPlaces);
listMaskConnection.set(MaskType.OBJECT, listOfObjects);
listMaskConnection.set(MaskType.VERB, listOfVerbs);
listMaskConnection.set(MaskType.ADJECTIVE, listOfAdjectives);

//makes the array of different prompts into an array of Templates based on the difficulty level
function promptDifficultySelection(difficultyLevel: number){
    return (promptsByDifficulty.get(difficultyLevel)).map(ConstructTemplate);
}

function wordScarySelection(scaryLevel: number){
    if (scaryLevel>=2){
        listMaskConnection.set(MaskType.OBJECT, listOfBodyParts);
    }
    if (scaryLevel>=3){
        listMaskConnection.set(MaskType.ADJECTIVE, listOfGross);
    }
    if (scaryLevel>=4){
        listMaskConnection.set(MaskType.ANIMAL, listOfMonsters);
    }

}

//Outputs the scentence to give to the ai image maker
export function createImageScentence(difficultyLevel: number, scaryLevel: number){
    let prompts: Template[]= promptDifficultySelection(difficultyLevel);

    let imageScentence: string ="";
    let promptChoice: number = Math.floor(Math.random()* prompts.length);
    
    wordScarySelection(scaryLevel);


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


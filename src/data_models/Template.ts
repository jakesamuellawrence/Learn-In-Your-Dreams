import { MaskType } from "./MaskType";

// use `[MASKED]` for masked words

export type fragment = string | MaskType;

export interface Template {
    fragments: fragment[]
}

function ConstructTemplate(toParse: string) {
    let words = toParse.split(" ");
    let fragments : fragment[] = words.map((word) => {
        if (word.startsWith("[")) {
            let type = word.slice(1, word.length-1)
           
            return MaskType[type as keyof typeof MaskType];
        } else return word
    });


    return {fragments: fragments}
}

export default ConstructTemplate;
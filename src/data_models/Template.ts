import Mask from "./Mask";
import { MaskType } from "./MaskType";

// use `[MASKED]` for masked words

export type fragment = string | Mask;

export interface Template {
    fragments: fragment[]
}

function ConstructTemplate(toParse: string) {
    let words = toParse.split(" ");
    let fragments : fragment[] = words.map((word) => {
        if (word.startsWith("[")) {
            let typeWord = word.slice(1, word.length-1);
            let type = MaskType[typeWord as keyof typeof MaskType];
            return new Mask(type);
        } else return word
    });

    return {fragments: fragments}
}

export default ConstructTemplate;
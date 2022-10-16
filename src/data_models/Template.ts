import Mask from "./Mask";
import { MaskType } from "./MaskType";

export type fragment = string | Mask;

export interface Template {
    fragments: fragment[];
    toString: () => string;
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
    
    let template = {fragments: fragments};

    template.toString = () => {
        let stringList = fragments.map((fragment) => {
            if (fragment instanceof Mask) {
                return fragment.actual;
            } else return fragment as string;
        });
        return stringList.join(" ");
    }

    return template;
}

export default ConstructTemplate;
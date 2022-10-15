import { fragment } from "./Template";


export enum MaskType {
    NOUN, 
    ADJECTIVE, 
    EMOTION,
    PLACE,
    OBJECT,
    ANIMAL,
}

export function isMaskType(fragment: fragment){
    return (Object.values(MaskType).includes(fragment));
}
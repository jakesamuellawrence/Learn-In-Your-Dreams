import { MaskType } from "./MaskType";

export default class Mask {
    maskType: MaskType | undefined;
    options: string[] | null = null;
    actual: string | null = null;

    constructor(maskType: MaskType) {
        this.maskType = maskType;
    }

    setOptions(options: string[]) {
        this.options = options;
    }

    setActual(actual: string) {
        this.actual = actual;
    }
}
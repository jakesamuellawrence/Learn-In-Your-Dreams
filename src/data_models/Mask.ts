import { MaskType } from "./MaskType";

export default class Mask {
    maskType: MaskType | undefined;
    options: string[] | null = null;
    actual: string | null = null;
    current: string | null = null;

    constructor(maskType: MaskType) {
        this.maskType = maskType;
    }

    setOptions(options: string[]) {
        this.options = options;
    }

    setActual(actual: string) {
        this.actual = actual;
    }

    setCurrent(current: string | null) {
        this.current = current;
    }

    isCorrect() {
        return this.current == this.actual;
    }
}
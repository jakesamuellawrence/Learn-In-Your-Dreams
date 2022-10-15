// define types for the property data that Hello will be given
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

// Uses function-component style. The function takes a props object and should return some JSX (the HTML-like syntax)
// here the props object is pattern-matched into some variables
function Hello({name, enthusiasmLevel = 1} : Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("You should be more enthusiastic");
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    )
}

export default Hello;

function getExclamationMarks(n: number) {
    return Array(n + 1).join("!");
}
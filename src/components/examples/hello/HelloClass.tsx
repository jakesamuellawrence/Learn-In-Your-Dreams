import React from "react";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

// class-style component. function-components are preferable when using hooks (see withHooks folder)
class HelloClass extends React.Component<Props> {
    render() {
        const {name, enthusiasmLevel = 1} = this.props;

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
}

export default HelloClass;

function getExclamationMarks(n: number) {
    return Array(n + 1).join("!");
}
import React, { SyntheticEvent } from "react";

export interface Props {
    name: string;
    enthusiasm? : number;
}

interface State {
    currEnthusiasm: number;
}

class HelloState extends React.Component<Props, State> {
    state = {currEnthusiasm: this.props.enthusiasm || 1}

    onIncrement = (event: SyntheticEvent) => {
        console.log(event);
        this.updateEnthusiasm(1);
    };

    onDecrement = (event: SyntheticEvent) => {
        console.log(event);
        this.updateEnthusiasm(-1);
    };

    updateEnthusiasm(change: number) {
        this.setState((currentState) => {
            return {currEnthusiasm: currentState.currEnthusiasm + change};
        });
    }

    render() {
        const {name} = this.props;

        if (this.state.currEnthusiasm <= 0) {
            throw new Error("You could be more enthusiastic");
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }
}

export default HelloState;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
}
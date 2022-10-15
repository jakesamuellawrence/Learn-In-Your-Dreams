import React, { SyntheticEvent } from "react";

export interface Props {
    name: string;
    enthusiasm? : number;
}

interface State {
    currEnthusiasm: number;
}

class HelloState extends React.Component<Props, State> {
    // when doing non-hook state (see withHooks for preferred way to do it),
    // state should be an object like this. Importantly, state should be immutable.
    // State should only be changed by calling setState
    state = {currEnthusiasm: this.props.enthusiasm || 1}

    // `name = () => {}` syntax is used for these event callback functions
    // so that we don't have to worry about this binding.
    // This isn't a problem if we're doing things the non-class way anyway
    onIncrement = (event: SyntheticEvent) => {
        console.log(event);
        this.updateEnthusiasm(1);
    };

    onDecrement = (event: SyntheticEvent) => {
        console.log(event);
        this.updateEnthusiasm(-1);
    };

    updateEnthusiasm(change: number) {
        // setState should take a function that is given the old state and returns
        // the new state object, which will be merged with the old state object
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
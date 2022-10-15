import React from "react";

function addMinutes (date: Date, minutes: number) : Date {
    return new Date(date.getTime() + minutes * 60000);
}

function Clock() {
    // give useState an initial value, get back a handle for that value and a function that updates it
    const [time, setTime] =  React.useState(new Date());

    const handleClick = () => {
        // must use the setter function returned by useState, don't update `time` directly
        // if you don't use `setTime`, the component will not be re-rendered
        setTime(addMinutes(time, 10));
    }

    const handleClickAlt = () => {
        // can also give setTime a function that takes the previous state and returns the new one
        // preferred if making many changes to the same state in a row based on the previous value each time,
        // as you can't guarantee that `time` will have been updated until the component re-renders
        setTime((previous) => addMinutes(previous, 10));
    }

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
            <button onClick={handleClick}>+ 10 Minutes</button>
        </div>
    )
}

export default Clock;
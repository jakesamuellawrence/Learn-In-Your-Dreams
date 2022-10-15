import React, { SyntheticEvent } from "react";

export interface Props {
    options: string[];
    onChange: (selectedValue: string) => void;
}

function Dropdown({options, onChange}: Props) {
    const defaultVal = "Select Word";

    let [value, setValue] = React.useState<string | null>(null);

    return(
        <select onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
        }}>
            <option selected={value == defaultVal ? true : false} 
                    value={defaultVal}>
                {defaultVal}
            </option>
            {options.map((option) => (
                <option value={option}
                        selected={value == option ? true : false}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default Dropdown;
import React, { SyntheticEvent } from "react";
import Mask from "../data_models/Mask";

export interface Props {
    mask: Mask;
    reportState: (selectedValue: string | null) => void;
    shouldShow: boolean;
}

function Dropdown({mask, reportState, shouldShow}: Props) {
    const defaultVal = "Select Word";

    let [value, setValue] = React.useState<string | null>(null);

    reportState(value);

    console.log(shouldShow);

    return(
        <span>
            <select onChange={(e) => {
                setValue(e.target.value);
            }}>
                <option selected={value == defaultVal ? true : false} 
                        value={defaultVal}>
                    {defaultVal}
                </option>
                {mask.options?.map((option) => (
                    <option value={option}
                            selected={value == option ? true : false}>
                        {option}
                    </option>
                ))}
            </select>
            {shouldShow &&
                <span>
                    {value == mask.actual ? <>✅ </> : <>❌ </> }
                </span>
            }
        </span>
    )
}

export default Dropdown;
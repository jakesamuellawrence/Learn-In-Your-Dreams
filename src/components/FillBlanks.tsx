import React from "react";
import Mask from "../data_models/Mask";
import { MaskType } from "../data_models/MaskType";
import { Template } from "../data_models/Template";
import Dropdown from "./Dropdown";

export interface Props {
    template: Template;
}

function FillBlanks({template} : Props) {
    let [shouldShow, setShouldShow] = React.useState(false);

    return(
        <div>
            <p>
                {template.fragments.map((fragment) => {
                    if (fragment instanceof Mask && fragment.options != null) {
                        return (
                            <>
                                <Dropdown 
                                    mask={fragment}
                                    reportState={(value) => {
                                        fragment.setCurrent(value);
                                    }}
                                    shouldShow={shouldShow}
                                />
                            </>
                        )
                    } else return <span> {fragment as string} </span>;
                })}
            </p>
            <button onClick={() => setShouldShow(true)}>
                Check
            </button>
        </div>
    )
}

export default FillBlanks;
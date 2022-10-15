import React, { Fragment } from "react";
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
                    console.log(fragment);
                    if (fragment instanceof Mask) {
                        console.log(fragment.options);
                    }
                    if (fragment instanceof Mask) {
                        if (!fragment.options) throw new Error("fragment word options is undefined");
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
                    } else {
                        console.log("not mask: " + fragment); 
                        return <span> {fragment as string} </span>;
                    } 
                })}
            </p>
            <button onClick={() => setShouldShow(true)}>
                Check
            </button>
        </div>
    )
}

export default FillBlanks;
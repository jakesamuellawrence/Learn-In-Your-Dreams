import React, { Fragment } from "react";
import Mask from "../data_models/Mask";
import { MaskType } from "../data_models/MaskType";
import { Template } from "../data_models/Template";
import Dropdown from "./Dropdown";

export interface Props {
    template: Template;
    showingResults: boolean;
    submit: (results: boolean[]) => void;
}

function FillBlanks({template, showingResults, submit} : Props) {
    let result : boolean[] = [];

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
                                        result.push(fragment.isCorrect());
                                    }}
                                    shouldShow={showingResults}
                                />
                            </>
                        )
                    } else {
                        console.log("not mask: " + fragment); 
                        return <span> {fragment as string} </span>;
                    } 
                })}
            </p>
            <button onClick={() => {
                submit(result);
            }}>
                Check
            </button>
        </div>
    )
}

export default FillBlanks;
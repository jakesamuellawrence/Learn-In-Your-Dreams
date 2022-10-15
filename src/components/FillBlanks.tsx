import Mask from "../data_models/Mask";
import { MaskType } from "../data_models/MaskType";
import { Template } from "../data_models/Template";
import Dropdown from "./Dropdown";

export interface Props {
    template: Template;
}

function FillBlanks({template} : Props) {
    return(
        <p>
            {template.fragments.map((fragment) => {
                if (fragment instanceof Mask && fragment.options != null) {
                    return <Dropdown options={fragment.options} onChange={(value) => {}} />
                } else return <span> {fragment as string} </span>;
            })}
        </p>
    )
}

export default FillBlanks;
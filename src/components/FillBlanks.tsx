import { MaskType } from "../data_models/MaskType";
import { Template } from "../data_models/Template";

export interface Props {
    template: Template;
}

function FillBlanks({template} : Props) {
    let fragmentDisplays = template.fragments.map((fragment) => {
        if (Object.values(MaskType).includes(fragment)) {
            return <li>Mask: {fragment}</li>
        } else return <li>Word: {fragment}</li>
    });
    return(
        <ul>
            {fragmentDisplays}
        </ul>
    )
}

export default FillBlanks;